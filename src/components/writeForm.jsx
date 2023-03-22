import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const WriteForm = (props) => {
  const [task, setTask] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <form className="todo" onSubmit={formSubmit}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          placeholder="Enter your task"
        />
        <label htmlFor="task" className="label">
          Enter your task
        </label>
      </div>
      <button className="btn" aria-label="Add task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default WriteForm;
