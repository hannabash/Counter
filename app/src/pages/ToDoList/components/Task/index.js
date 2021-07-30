import React from "react";

import styles from '../ToDoListLayout/styles.module.scss'

const Task = ({
  text,
  isCompleted,
  handleEdit,
  handleRemove,
  handleComplete,
}) => {
  return (
    <div
      className={`${isCompleted ? styles.complete: styles.normal}`}
    >
      <div>{text}</div>
      <div className={styles.button}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default React.memo(Task);
