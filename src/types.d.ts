import { TODO_FILTERS } from "./const/const";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }
  
  export type ListOfTodos = Todo[];
  export type ToggleTodo = (id: string) => void;
  export type RemoveTodo = (id: string) => void;

  export type TodoTitle = Pick<Todo, 'title'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];