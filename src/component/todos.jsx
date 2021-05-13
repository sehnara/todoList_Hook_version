import React from 'react';
import Todo from './todo';

const Todos = (props) => {
    const toDos = props.toDos;

    return(
        <ul className="todo-lists">
            {
               toDos.map(todo=>
               <Todo 
                    key = {todo.id}
                    id = {todo.id}
                    title = {todo.title}    
                    conf = {todo.confirmed}
                    show = {todo.isShow}

                    onConf = {props.onConf}
                    onShow = {props.onShow}
                    onDel = {props.onDel}
                    >
                </Todo>)
            }          
        </ul>
    );
};

export default Todos;