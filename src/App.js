import './App.css';
import WriteForm from './components/writeForm';
import { useState } from 'react';
import { ItemList } from './components/ItemList';

function App() {
  const [tasks,setTasks]= useState([])

  const addTask= (task)=>{
    setTasks(prevState=>[...prevState,task])
  }
  const deleteTask=(id)=>{
    setTasks(prevState=>prevState.filter(t=>t.id !==id))
  }
  return (
    <div className="container">
      <header>
        <h1>My Task</h1>
      </header>
      <WriteForm addTask={addTask}/>
      {tasks && <ItemList tasks={tasks} deleteTask={deleteTask}/>}
    </div>
  );
}

export default App;
