import { useRef, useState } from 'react';
import './app.css';
import Input from './component/input';
import Nav from './component/nav';
import Todos from './component/todos';

function App() {
  
  // state
  const [toDos, setTodos] = useState(
    [
      {id : 1, title : '아침 산책', confirmed: false, isShow : false},
      {id : 2, title : '등산', confirmed: false, isShow : false},
      {id : 3, title : '물구나무 서기', confirmed: false, isShow : false},
      {id : 4, title : '전속력으로 달리기', confirmed: false, isShow : false}
    ]
  );
  const [showInput, setShowInput]=useState(false);

  // method  
  const handleConf = (id) =>{
    setTodos(toDos=> toDos.map((todo)=> 
                                todo.id===id? 
                                {...todo, confirmed : !todo.confirmed}:todo));    
  };  

  const leftCount = toDos.length-toDos.filter((todo)=>{
    return todo.confirmed === true;
  }).length;

  const handleShow =(id, bool)=>{
    setTodos(toDos=>toDos.map(todo=>
                              todo.id===id?
                              {...todo, isShow: bool}:todo));    
  }

  const handleDelete = (id) =>{
    setTodos(toDos=>toDos.filter((todo)=>{
      return todo.id !== id;
    }))
  }
  const handleShowInput = ()=>{
    setShowInput(showInput=>!showInput);
  }

  const newId = useRef(5);
  const handleInputToDo=(todo)=>{
      const toDoObj = {
      id:newId.current,
      title : todo,
      confirmed : false,
      isShow : false
    }
    const newTodos = [...toDos];
    newTodos.push(toDoObj);
    newId.current+=1;
    
    console.log(toDoObj);
    setTodos(toDos=>newTodos);
  }  

  return (
    <>
      <div className="container">
      <Nav 
        leftCount = {leftCount}     
        />
      <Todos
        toDos = {toDos}
        onConf = {handleConf}
        onShow = {handleShow}
        onDel = {handleDelete}        
      />      
      <Input
        showInput = {showInput}
        onShowInput = {handleShowInput}
        onInputToDo={handleInputToDo}
      />
      </div>      
    </>
  );
}

export default App;
