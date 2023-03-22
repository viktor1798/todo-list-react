import './App.css';
import WriteForm from './components/writeForm';
import { useState } from 'react';
import { ItemList } from './components/ItemList';

function App() {
  const [tasks,setTasks]= useState([])

  const addTask= (task)=>{
    setTasks(prevState=>[...prevState,task])
  }
  return (
    <div className="container">
      <header>
        <h1>My Task</h1>
      </header>
      <WriteForm addTask={addTask}/>
      {tasks && <ItemList tasks={tasks}/>}
    </div>
  );
}

export default App;
