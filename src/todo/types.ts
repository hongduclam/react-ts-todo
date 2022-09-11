export interface TodoItem {
  id: string;
  task: string;
  isDone: boolean;
}

export type TodoItems = TodoItem[]