import {useCallback, useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ToDoListLayout from '../components/ToDoListLayout/ToDoListLayout'
import {ADD_TASK, REMOVE_TASK, EXECUTE_TASK, EDIT_TASK, SAVE_TASK, CANCEL_TASK} from '../actions/index'

const ToDoListContainer = () => {
   const [inputValue, setValue] = useState('')
   
   const dispatch = useDispatch();

   const handleInputChange = useCallback((event) => {
      event.preventDefault();
      setValue(event.target.value)
   }, [])

   const handleReset = useCallback(() => {
      setValue(inputValue)
   }, [])

   const handleTasksCreate = useCallback(() => {
      dispatch(ADD_TASK(inputValue));
   },[inputValue]);

   const handleTasksEdit = useCallback((index) => {
      dispatch(EDIT_TASK(index))
   }, [dispatch]);

   const handleSaveEdit = useCallback((index) => {
      dispatch(SAVE_TASK({taskIndex: index, value: inputValue}))
   }, [inputValue]);

   const handleCancelEdit = useCallback((index) => {
      dispatch(CANCEL_TASK(index))
   }, [dispatch])

   const handleRemove = useCallback((index) => {
      dispatch(REMOVE_TASK(index))
   }, [dispatch]);

   const handleExecuteTask = useCallback((index) =>{
      dispatch(EXECUTE_TASK(index))
   }, [dispatch]);

   const {tasks} = useSelector((state) => state.tasksPage)
   return (
      <ToDoListLayout 
      inputValue={inputValue}
      tasks={tasks} 
      handleTasksCreate={handleTasksCreate}
      handleRemove={handleRemove}
      handleExecuteTask={handleExecuteTask}
      handleInputChange={handleInputChange}
      handleTasksEdit={handleTasksEdit}
      handleSaveEdit={handleSaveEdit}
      handleCancelEdit={handleCancelEdit}
      handleReset={handleReset}
      />
   );
}

export default ToDoListContainer;