import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <div key={todo.id}>
      <h1>{todo.title}</h1>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
