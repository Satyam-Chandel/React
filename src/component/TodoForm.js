import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus() ;
    })


    const nameChangeHandler = (event) => {
        setInput(event.target.value)
    }


    const submitHandler = (e) => {
       e.preventDefault();

       props.onSubmit({
           id: Math.floor(Math.random() * 1000),
           text: input
       })

    setInput("");
    }


    return (
        <form className="todo-form" onSubmit={submitHandler}>
            {props.edit ?
             (  
            <>
             <input
              type="text"
              placeholder="Update Your Item" 
              value={input} 
              className="todo-input" 
              onChange={nameChangeHandler} 
              ref={inputRef}/>  
              <button className="todo-button">Update</button> 
              </>
              )
               : (
                   <> 
                   <input 
                   type="text" 
                   placeholder="Add Todo.." 
                   value={input} className="todo-input" 
                   onChange={nameChangeHandler} 
                   ref={inputRef}/> 
                    <button className="todo-button">Add Todo</button>
                    </>
                )}
        
        </form>
    )
}

export default TodoForm;
