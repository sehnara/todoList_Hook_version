import React, { useRef } from 'react';

const Input = (props) => {
    // 1. variable
    const inputRef = useRef();    
    const isInput = props.showInput;   

    const style ={
        transform : 'rotate(45deg)',
        backgroundColor : 'orangeRed',
        transition: 'all 1s ease-out',   
    }

    // 2. method
    const handleShowInput =() =>{
        props.onShowInput();
    }
    const handleInputToDo = (e) =>{
        e.preventDefault();
        const todo = inputRef.current.value;
        // console.log(todo);

        props.onInputToDo(todo);
        inputRef.current.value='';
    }

    return(
        <>
            {
                isInput&&
                <>
                    <button 
                        className="button-input" 
                        onClick={handleShowInput} 
                        style={style}              
                    >
                    <i className="fas fa-plus"></i>
                    </button>
                    <div className="input-container">
                        <form onSubmit={handleInputToDo}>
                         <input
                            ref={inputRef} 
                            type="text" 
                            placeholder="   할 일 입력 후, Enter 누르세요."
                            className="input-todo"
                            onSubmit={handleInputToDo}
                            />
                        </form>
                    </div>
                </>
            }
            {
                !isInput&&
                <>
                <button 
                    className="button-input" 
                    onClick={handleShowInput} 
                >
                <i className="fas fa-plus"></i>
                </button>
                
                </>
            }
        </>
    );
};

export default Input;