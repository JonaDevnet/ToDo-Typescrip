import React, { useState } from "react";
import { Todos } from "./components/ToDos";

const mockTodos = [
  { id: 1, title: 'todo 1', completed: true },
  { id: 2, title: 'todo 2', completed: false },
  { id: 3, title: 'todo 3', completed: false }
];

const App: React.FC = () => {
  // usamos useState para definir todos, que almacenan
  // la lista actual de tareas
  const [todos, setTodos] = useState(mockTodos);
  // setTodos es la funcion que actualiza todo cuando
  // queremos agregar o eliminar o modificar una tarea

  // handleRemove toma un 'id' como parametro y filtra
  // la lista de 'todos' para excluir la tarea con ese id
  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    // usamos setTodos para actualizar la lista sin la tarea eliminada
    setTodos(newTodos);
  };

  // handleToggleCompleted toma un 'id' como parametro
  // utiliza setTodos para actualizar completed de la tarea
  // cuyo id coincide, invirtiendo su valor true a falce y viceversa
  const handleToggleCompleted = (id: number): void => {
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todoapp">
      <Todos 
        onRemoveTodo={handleRemove} // funcion para eliminar tareas
        onToggleCompleted={handleToggleCompleted} // funcion para cambiar el estado de completado de una tarea.
        todos={todos} // lista de tareas actual
      />
    </div>  
  );
};

export default App;
