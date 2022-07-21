import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';

const TodoApp = () => {
    const initialTodos = [
        { id:1, task: "Clean Fishtank", completed: false },
        { id:2, task: "Wash Car", completed: true },
        { id:3, task: "Grow Beard", completed: false },
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id:uuid(), task : newTodoText, completed: false }])
    }
    const removeTodo = todoId => {
        //fliter out remove todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId );
        //call setTodos with new todos array 
        setTodos(updatedTodos);
    }

    const toogleTodo = todoId => {
        const  updatedTodos = todos.map(todo => 
         todo.id === todoId ? {...todo, completed : !todo.completed } : todo 
        );
        setTodos(updatedTodos); 
    };

    return (
        <Paper style={{
            padding: 0,
            margin:0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: "64px"}} > 
                <Toolbar>
                    <Typography color="inherit"> TODOS WITH REACT HOOKS </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{marginTop: "1rem"}}> 
                <Grid item xs={11} md={8} lg={4} > 
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toogleTodo={toogleTodo}/>
                </Grid>
            </Grid>
            
        </Paper>
      )
}

export default TodoApp
