import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const InputBar = () => {
  const [title, setTitle] = useState("");
  const { addTodo, clearTodo } = useContext(TodoContext);

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="input-bar">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Add Todo..."
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Add Todo
        </button>
        <button type="button" onClick={clearTodo}>
          Clear Todos
        </button>
      </form>
    </div>
  );
};

export default InputBar;
