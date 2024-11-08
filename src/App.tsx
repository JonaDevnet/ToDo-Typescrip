import React, { useState } from "react";
import { Todos } from "./components/ToDos";

const mockTodos = [
  { id: 1, title: 'todo 1', completed: true },
  { id: 2, title: 'todo 2', completed: false },
  { id: 3, title: 'todo 3', completed: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

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
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleToggleCompleted}
        todos={todos}
      />
    </div>  
  );
};

export default App;
