import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (text: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => prev.concat(newTodo));
  };

  const handleDeleteTodo = (todoText: string) => {
    setTodos((prev) => prev.filter((todo) => todo.text !== todoText));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleDeleteTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
