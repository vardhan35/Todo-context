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
    if (title.length) {
      addTodo(title);
    }
    setTitle("");
  };

  return (
    <div className="input_bar">
      <form action="" className="input_bar_form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Add Todo..."
          required
        />
        <div className="input_action">
          <button className="clear_btn" type="button" onClick={clearTodo}>
            Clear All
          </button>
          <button className="input_btn" type="submit" onClick={handleSubmit}>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
