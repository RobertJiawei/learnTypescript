import { useContext } from "react";
import { TodosContext } from "../store/todosContext";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.text}
          item={item}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.text)}
        />
      ))}
    </ul>
  );
};
export default Todos;
