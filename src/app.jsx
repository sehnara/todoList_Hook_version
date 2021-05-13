import { useEffect, useState } from 'react';
import './app.css';
import Nav from './component/nav';
import Todos from './component/todos';

function App() {
  
  // state
  const [toDos, setTodos] = useState(
    [
      {id : 1, title : '아침 산책', confirmed: false},
      {id : 2, title : '등산', confirmed: false},
      {id : 3, title : '물구나무 서기', confirmed: false},
      {id : 4, title : '전속력으로 달리기', confirmed: false}
    ]
  );

  // method  
  const handleConf = (id) =>{
    setTodos(toDos=> toDos.map((todo)=> 
                                todo.id===id? 
                                {...todo, confirmed : !todo.confirmed}:todo));    
  };  

  return (
    <div className="container">
     <Nav />
     <Todos
      toDos = {toDos}
      onConf = {handleConf}
     />     
    </div>
  );
}

export default App;
