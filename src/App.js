import React from "react";
import InputBar from "./components/Header/InputBar";
import Navbar from "./components/Header/Navbar";
import TodoLists from "./components/Lists/TodoLists";

const App = () => {
  return (
    <div>
      <Navbar />
      <InputBar />
      <TodoLists />
    </div>
  );
};

export default App;
