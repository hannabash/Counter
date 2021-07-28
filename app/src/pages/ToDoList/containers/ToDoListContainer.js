import { useCallback, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ToDoListLayout from "../components/ToDoListLayout/ToDoListLayout";
import {
  ADD_TASK,
  REMOVE_TASK,
  EXECUTE_TASK,
  EDIT_TASK,
  SAVE_TASK,
  CANCEL_TASK,
  CHANGE_EDIT_TASK,
} from "../actions/index";

const ToDoListContainer = () => {
  const dispatch = useDispatch();

  const [inputValue, setValue] = useState("");

  const { tasks } = useSelector((state) => state.tasksPage);

  const handleInputChange = useCallback((e) => {
    const { value } = e.target;

    setValue(value);
  }, []);

  const handleTasksCreate = useCallback(() => {
    dispatch(ADD_TASK(inputValue));
  }, [inputValue, dispatch]);

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

  const handleTaskEdit = useCallback(
    (editText, id) => {
      dispatch(CHANGE_EDIT_TASK({ editText, id }));
    },
    [dispatch]
  );

  return (
    <ToDoListLayout
      tasks={tasks}
      handleTasksCreate={handleTasksCreate}
      handleInputChange={handleInputChange}
      handleEditToggle={handleEditToggle}
      handleEditSave={handleEditSave}
      handleTaskEdit={handleTaskEdit}
    />
  );
};

export default ToDoListContainer;
