import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { removeTodo } = useContext(TodoContext);

  const handleClick = () => {
    setIsComplete(!isComplete);
  };
  return (
    <div key={todo.id} className="todo_item">
      <input className="check_btn" type="checkbox" onClick={handleClick} />
      <p className={isComplete ? "todo_para_complete" : "todo_para"}>
        {todo.title}
      </p>
      <button
        className="remove_btn"
        type="button"
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
