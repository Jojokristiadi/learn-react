import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const ToDoList = ({ toDoList }) => {
 

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        toDoList.map((todo, index) => {
          return <ListItem
            key={todo}

            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': index }}
                />
              </ListItemIcon>
              <ListItemText id={index} primary={todo} />
            </ListItemButton>
          </ListItem>
        })
      }

    </List>
  )
}

export default ToDoList