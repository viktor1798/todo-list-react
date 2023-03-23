import "./App.css";
import WriteForm from "./components/writeForm";
import { useState } from "react";
import { ItemList } from "./components/ItemList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Все в Redux

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };
  const toogleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id == id ? { ...t, checked: !t.checked } : t))
    );
  };
  return (
    <div className="container">
      <header>
        <h1>My Task</h1>
      </header>
      <WriteForm addTask={addTask} />
      {tasks && <ItemList tasks={tasks} deleteTask={deleteTask} toogleTask={toogleTask}/>}
    </div>
  );
}

export default App;
