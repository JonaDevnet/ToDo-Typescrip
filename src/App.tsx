import React, { useState } from "react";
import { Todos } from "./components/todo/ToDos";
import { TODO_FILTERS } from "./const/const";
import { FilterValue, TodoTitle } from "./types";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

const mockTodos = [
  { id: '1', title: 'Levantarse', completed: true },
  { id: '2', title: 'Desayunar', completed: false },
  { id: '3', title: 'Estudiar', completed: false }
];

const App: React.FC = () => {

  // usamos useState para definir todos, que almacenan
  // la lista actual de tareas
  // setTodos es la funcion que actualiza todo cuando
  // queremos agregar o eliminar o modificar una tarea
  const [todos, setTodos] = useState(mockTodos);
  

  const[filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  // handleRemove toma un 'id' como parametro y filtra
  // la lista de 'todos' para excluir la tarea con ese id
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    // usamos setTodos para actualizar la lista sin la tarea eliminada
    setTodos(newTodos);
  };

  // handleToggleCompleted toma un 'id' como parametro
  // utiliza setTodos para actualizar completed de la tarea
  // cuyo id coincide, invirtiendo su valor true a falce y viceversa
  const handleToggleCompleted = (id: string): void => {
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const  newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }


  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount;

  const filteredTodos =todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if( filterSelected === TODO_FILTERS.COMPLETED)  return todo.completed
    return todo
  })

   const handleAddTodo = ({title}: TodoTitle): void => {
      const newTodo = {
        title,
        id: crypto.randomUUID(),
        completed: false
      }
      const newTodos = [... todos, newTodo]
      setTodos(newTodos)
   }

  return (
    <div className="todoapp">
      <Header onAddToDO={handleAddTodo}/>
      <Todos 
        onRemoveTodo={handleRemove} // funcion para eliminar tareas
        onToggleCompleted={handleToggleCompleted} // funcion para cambiar el estado de completado de una tarea.
        todos={filteredTodos} // lista de tareas actual
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>  
  );
};

export default App;
