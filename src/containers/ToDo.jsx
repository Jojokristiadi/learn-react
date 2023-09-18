import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleClick = () => {
    //spread operator ...
    //untuk mengeluarkan objek2 dalam array
    if (toDo === null || toDo === "") {
      alert("To do is required!");
    } else {
      setToDoList([toDo, ...toDoList]);
      setToDo("");
    }
  };

  return (
    <div className="todo">
      <h2 className="title">TO-DO-LIST</h2>
      <ToDoForm handleClick={handleClick} setToDo={setToDo} toDo={toDo} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default ToDo;
