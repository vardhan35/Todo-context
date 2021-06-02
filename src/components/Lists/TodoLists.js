import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoLists = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div>
      {todos.length ? (
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <h1>Empty Todos</h1>
      )}
    </div>
  );
};

export default TodoLists;
