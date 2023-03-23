import React, { useState } from "react";

import {
  TrashIcon,
  PencilSquareIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import s from "./TaskItem.module.css";

export const TaskItem = (props) => {
  const [isChecked, setIsCheked] = useState(props.task.checked);

  const checkboxChange = () => {
    setIsCheked(!isChecked);
    props.toogleTask(props.task.id)
  };

  const deleteThisTask=()=>{
    props.deleteTask(props.task.id)
  }
  return (
    <li className={s.task}>
      <div className={s["task-group"]}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChange}
          name={props.task.name}
          id={props.task.id}
        />
        <label htmlFor={props.task.id} className={s.label}>
          {props.task.name}
          <p className={s.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={s["task-group"]}>
        <button className="btn" aria-label={`Update ${props.task.name} Task`}>
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button className="btn" onClick={deleteThisTask} aria-label={`Delete ${props.task.name} Task`}>
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};
