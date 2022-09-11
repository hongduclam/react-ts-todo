import { useState, useCallback } from "react";
import { TodoItems } from "./types";

interface UseTodo {
  todoItems: TodoItems;
  addTodo: (task: string) => void;
  completeTodo: (id: string) => void;
}

export const useTodo: () => UseTodo = () => {
  const [todoItems, setTodoItems] = useState<TodoItems>([]);
  const addTodo = useCallback((task: string) => {
    setTodoItems([...todoItems, {id:`${todoItems.length + 1}`, task, isDone: false}])
  }, [todoItems])

  const completeTodo = useCallback((updateId: string) => {
    const updatedTodos = [...todoItems].map(todoItem => {
      if (todoItem.id === updateId) {
        return {
          ...todoItem,
          isDone: true
        }
      }
      return todoItem;
    })
    setTodoItems(updatedTodos);
  }, [todoItems])

  return {
    todoItems,
    addTodo,
    completeTodo
  }
}