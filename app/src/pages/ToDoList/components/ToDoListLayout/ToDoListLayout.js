import React from "react";
import PropTypes from "prop-types";

import styles from "../ToDoListLayout/styles.module.scss";
import Task from "../Task";
import EditableTask from "../EditableTask";

const ToDoListLayout = ({
  tasks,
  inputValue,
  handleTasksCreate,
  handleInputChange,
  handleEditToggle,
  handleEditSave,
  handleTaskEdit,
  handleTasksReset,
  handleEditUndo,
  handleTaskRemove,
  handleTaskComplete
}) => {
  return (
    <div>
      <form>
        <label>
          <p>Enter task</p>
          <input value={inputValue} type="text" onChange={handleInputChange} />
        </label>
        <button
          disabled={inputValue === ""}
          type="button"
          onClick={handleTasksCreate}
        >
          Submit
        </button>
        <button
        onClick={handleTasksReset}>
          Reset
        </button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div style={{ marginBottom: 15 }} key={task.id}>
            {task.isEditMode ? (
              <EditableTask
                taskText={task.editText}
                handleSave={() => handleEditSave(index)}
                handleUndo={()=>handleEditUndo(index)}
                handleEdit={(e) => handleTaskEdit(e.target.value, task.id)}
              />
            ) : (
              <Task
                text={task.text}
                isCompleted={task.isCompleted}
                handleEdit={() => handleEditToggle(index)}
                handleRemove={()=>handleTaskRemove(index)}
                handleComplete={()=>handleTaskComplete(index)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ToDoListLayout.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      taskValue: PropTypes.string,
      execution: PropTypes.bool,
    })
  ),
};

export default ToDoListLayout;
