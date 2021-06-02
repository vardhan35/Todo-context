import React from "react";
import Navbar from "./components/Header/Navbar";
import TodoLists from "./components/Lists/TodoLists";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <TodoLists />
    </div>
  );
};

export default App;
