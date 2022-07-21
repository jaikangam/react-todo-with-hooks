import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { Checkbox } from '@mui/material';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';


function Todo({task, completed }) {
  return (
    <ListItem >
        <Checkbox tabIndex={-1} checked={completed} />
        <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>  {task} </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label='Delete'> 
                <DeleteIcon /> 
            </IconButton>
            <IconButton aria-label='Edit'> 
                <EditIcon /> 
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todo