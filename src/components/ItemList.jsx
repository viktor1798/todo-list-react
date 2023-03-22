import React from "react";

import s from "./ItemList.module.css";
import { TaskItem } from "./TaskItem";

export const ItemList = (props) => {
  return (
    <ul className={s.tasks}>
      {props.tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={props.deleteTask}/>
        ))}
    </ul>
  );
};
