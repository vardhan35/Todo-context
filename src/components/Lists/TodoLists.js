import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import InputBar from "./InputBar";
import TodoItem from "./TodoItem";

const TodoLists = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div className="todo">
      <div className="todo_input">
        <InputBar />
      </div>
      <div className="todo_list">
        {todos.length ? (
          todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <h1>Empty Todos</h1>
        )}
      </div>
    </div>
  );
};

export default TodoLists;
