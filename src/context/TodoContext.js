import React, { useState, createContext } from "react";
import uuid from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([{ title: "How are you", id: 1 }]);
  const [editedItem, setEditedItem] = useState(null);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: uuid() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearTodo = () => {
    setTodos([]);
  };


  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
