import { Button } from "@mui/material";
import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  // state adalah untuk menyimpan data di halaman tanpa reload.
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  // sebelum: ["sapu", "pel"]
  // sesudah: [{"task": "sapu", "completed":true}, {"task": "mencuci", "completed":false}]

  const handleClick = () => {
    //spread operator ...
    //untuk mengeluarkan objek2 dalam array
    if (toDo === null || toDo === "") {
      alert("To do is required!");
    } else {
      setToDoList([{ task: toDo, completed: false }, ...toDoList]);
      setToDo("");
    }
  };

  const handleCheck = (index) => {
    const newToDo = [...toDoList];
    newToDo[index].completed = !newToDo[index].completed;
    //Untuk set state ulang, kita harus memberikan array utuh
    //array utuh untuk menimpa setstate secara keseluruhan
    setToDoList(newToDo);
  };

  const deleteClick = () => {
   const filteringObject =  toDoList.filter((el) => {
     return el.completed === false
   })
    setToDoList(filteringObject)
  }

  return (
    <div className="todo">
      <h2 className="title">TO-DO-LIST</h2>
      {/* fungsi props untuk memeberikan data yang dibutuhkan komponen. */}
      <ToDoForm handleClick={handleClick} setToDo={setToDo} toDo={toDo} />
      <ToDoList toDoList={toDoList} handleCheck={handleCheck} />
      <Button variant="outlined" color="error" onClick={deleteClick}>
        Delete
      </Button>
    </div>
  );
};

export default ToDo;
