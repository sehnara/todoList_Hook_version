import React from 'react';

const Todo = (props) => {  

    // vaiable
    const title = props.title;
    const confirm = props.conf;
    const show = props.show;

    const text_style= {
        color : 'rgb(217, 219, 219)'
    }
    const btn_style= {
        borderColor : 'rgb(255, 212, 23)',
        borderWidth : '2px',
        color : 'rgb(255, 212, 23)',
    }

    // method
    const handleConf =() =>{
        props.onConf(props.id);
    }
    const handleShow = (bool)=>{
        props.onShow(props.id, bool)
    }
    const handleDelete = ()=>{
        props.onDel(props.id);
    }


    return(
        <>
        {/* 조건부 렌더링 */}
        {confirm&&
            <li 
                className="todo-list"
                onMouseEnter={()=>handleShow(true)}
                onMouseLeave={()=>handleShow(false)}
            >   <div className="todo-list-container">
                    <button className="todo-confirm" onClick={handleConf} style={btn_style}><i className="fas fa-check"></i></button>
                    <span className="todo-title" style={text_style}>{title}</span>
                </div>
                {
                    show&& 
                    <button className="button-delete" onClick={handleDelete}><i className="fas fa-trash"></i></button>
                }
            </li>
        }
        {
            !confirm&&
            <li 
                className="todo-list"
                onMouseEnter={()=>handleShow(true)}
                onMouseLeave={()=>handleShow(false)}
            >
                <div className="todo-list-container">
                    <button className="todo-confirm" onClick={handleConf}></button>
                    <span className="todo-title">{title}</span>
                </div>
                {
                    show&& 
                    <button className="button-delete" onClick={handleDelete}><i className="fas fa-trash"></i></button>
                }
            </li>
        }        
        </>
    );
};        

export default Todo;