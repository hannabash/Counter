import { useCallback, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ToDoListLayout from "../components/ToDoListLayout/ToDoListLayout";
import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  SAVE_TASK,
  COMPLETE_TASK,
  CHANGE_EDIT_TASK,
  UNDO_TASK
} from "../actions/index";

const ToDoListContainer = () => {
  const dispatch = useDispatch();

  const [inputValue, setValue] = useState("");

  const { tasks } = useSelector((state) => state.tasksPage);

  const handleInputChange = useCallback((e) => {
    const { value } = e.target;

    setValue(value);
  }, []);

  const handleTasksCreate = useCallback((event) => {
    event.preventDefault(); 
    dispatch(ADD_TASK(inputValue));
    setValue('')
  }, [inputValue, dispatch]);

  const handleTasksReset = useCallback(() => {
     setValue(inputValue)
  }, [])

  const handleEditToggle = useCallback(
    (index) => {
      dispatch(EDIT_TASK(index));
    },
    [dispatch]
  );

  const handleEditSave = useCallback(
    (taskIndex) => {
      dispatch(SAVE_TASK(taskIndex));
    },
    [dispatch]
  );

  const handleEditUndo = useCallback((taskIndex) => {
      dispatch(UNDO_TASK(taskIndex))
  }, [dispatch])

  const handleTaskEdit = useCallback(
    (editText, id) => {
      dispatch(CHANGE_EDIT_TASK({ editText, id }));
    },
    [dispatch]
  );

  const handleTaskRemove = useCallback((index) => {
     dispatch(REMOVE_TASK(index))
  }, [dispatch])

  const handleTaskComplete= useCallback((index) =>{
     dispatch(COMPLETE_TASK(index))
  }, [dispatch])

  return (
    <ToDoListLayout
      tasks={tasks}
      inputValue={inputValue}
      handleTasksCreate={handleTasksCreate}
      handleInputChange={handleInputChange}
      handleEditToggle={handleEditToggle}
      handleEditSave={handleEditSave}
      handleTaskEdit={handleTaskEdit}
      handleTasksReset={handleTasksReset}
      handleEditUndo={handleEditUndo}
      handleTaskRemove={handleTaskRemove}
      handleTaskComplete={handleTaskComplete}
    />
  );
};

export default ToDoListContainer;
