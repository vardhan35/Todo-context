import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { removeTodo } = useContext(TodoContext);

  const handleClick = () => {
    setIsComplete(!isComplete);
  };
  return (
    <div
      key={todo.id}
      className={isComplete ? "todo-item-complete" : "todo-item"}
    >
      <h1>{todo.title}</h1>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
      <button type="button" onClick={handleClick}>
        button
      </button>
    </div>
  );
};

export default TodoItem;
