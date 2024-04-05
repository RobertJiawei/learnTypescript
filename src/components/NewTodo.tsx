import { useContext, useRef } from "react";
import { TodosContext } from "../store/todosContext";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input
        type="text"
        id="text"
        onChange={(e) => e.target.value}
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
