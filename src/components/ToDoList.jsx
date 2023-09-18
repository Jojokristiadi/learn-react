import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const ToDoList = ({ toDoList, handleCheck }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {toDoList.map((todo, index) => {
        return (
          <ListItem key={index} disablePadding>
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": index }}
                  checked={todo.completed}
                  onChange={() => handleCheck(index)}
                />
              </ListItemIcon>
              <ListItemText id={index} primary={todo.task} className={todo.completed && "strike"}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ToDoList;
// const orang = {"name": "budi"}
// orang.name
// if(umur > 18 && wni) pemilu
// dua2nya true
// umur < 18
