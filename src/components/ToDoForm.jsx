import { Button, TextField } from '@mui/material';
import React from 'react'

const ToDoForm = ({ handleClick, toDo, setToDo }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (

    <div className='todo-form'>
      <p>Today to dolist</p>
      <span>
      <TextField id="filled-basic" label="to do" variant="filled" onKeyDown={handleKeyDown} value={toDo} type="text" onChange={(e) => setToDo(e.target.value)} />
      
        <Button onClick={handleClick} variant="contained">Submit</Button>
      </span>
    </div>
  )
}

export default ToDoForm