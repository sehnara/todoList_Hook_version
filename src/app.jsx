import { useEffect, useState } from 'react';
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
      </div>
      <Input/>
    </>
  );
}

export default App;
