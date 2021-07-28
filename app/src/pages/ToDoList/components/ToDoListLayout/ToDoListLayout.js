import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import styles  from '../ToDoListLayout/styles.module.scss'

const ToDoListLayout = ({ 
   tasks, 
   handleTasksCreate,
   inputValue,
   handleRemove,
   handleExecuteTask,
   handleInputChange,
   handleTasksEdit,
   handleSaveEdit,
   handleCancelEdit,
   handleReset,
   }) => {
   return (
      <div>
         <form>
            <label>
               <p>Enter task</p>
               <input value={inputValue} type="text" onChange={handleInputChange}></input>
            </label>
            <button disabled={inputValue===""} type="button" onClick={handleTasksCreate}>
            Submit
            </button>
            <button onClick={handleReset}>Reset</button>
         </form>
         {tasks.map((task, index) => (
         task.isEditTask ?
            <div className={styles.task} key={uuid()}>
               {task.taskValue}
               <div className={styles.button}>
                  <button onClick={()=>handleSaveEdit(index)}>Save</button>
                  <button onClick={()=>handleCancelEdit(index)}>Cancel</button>
               </div>
               
            </div>
         :
         <div className={`${styles.task} ${task.isExecution ? styles.execute:styles.task}`} key={uuid()}>
            {task.taskValue}
            <div id={styles.button}>
               <button onClick={()=>handleExecuteTask(index)}>Execute</button>
               <button onClick={()=>handleTasksEdit(index)}>Edit</button>
               <button onClick={()=>handleRemove(index)}>Delete</button>
            </div>
         </div>  
         ))}
      </div>
   );
};

ToDoListLayout.propTypes = {
   tasks: PropTypes.arrayOf(
      PropTypes.shape({
         taskValue: PropTypes.string,
         isExecution: PropTypes.bool,
         isEditTask: PropTypes.bool,
      }))
}

export default ToDoListLayout;
