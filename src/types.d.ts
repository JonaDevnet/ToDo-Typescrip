export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export type ListOfTodos = Todo[];
  export type ToggleTodo = (id: number) => void;
  export type RemoveTodo = (id: number) => void;
  