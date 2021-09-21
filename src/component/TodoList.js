import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  
    const [todos, setTodo] = useState([]);

    const addtodohandler = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return ;
        }

        const newTodos = [todo,...todos];
        setTodo(newTodos);
        console.log(todo,...todos);
    }


    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return ;
        }

        setTodo((prev) => 
            prev.map(item => (item.id === todoId ? newValue : item)
        ))
};


    const removeTodo = id => {
        const removeArr = [...todos].filter((todo) => todo.id !== id);
        setTodo(removeArr);
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete ;
            }
            return todo ;
        });

        setTodo(updatedTodo) ;
    }

    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoForm onSubmit={addtodohandler}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
