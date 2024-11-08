import React from "react";
import { type ListOfTodos, ToggleTodo, RemoveTodo } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: RemoveTodo;
  onToggleCompleted: ToggleTodo;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li 
          key={todo.id} 
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo 
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
