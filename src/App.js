import './App.css';
import WriteForm from './components/writeForm';

function App() {
  const addTask= (task)=>{
    console.log(task)
  }
  return (
    <div className="container">
      <header>
        <h1>My Task</h1>
      </header>
      <WriteForm addTask={addTask}/>
    </div>
  );
}

export default App;
