import React, { useState } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const markText = (index) => {
    todo[index].mark = !todo[index].mark;
    setTodo([...todo]);
  };

  const deleteState = (index) => {
    const finishDelete = todo.filter((el) => {
      return el.id !== index + 1;
    });
    setTodo(finishDelete);
  };
  const newInput = (newState) => {
    const newTodo = { name: newState, mark: false, id: todo.length + 1 };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <Header />
      <Input newInput={newInput} />
      <TodoList todos={todo} deleteState={deleteState} markText={markText} />
    </div>
  );
}

export default App;
