import {handleActions} from 'redux-actions';
import { v4 as uuid } from "uuid";
import * as actions from '../actions/index'

const defaultState = {
   tasks: [],
}

const tasksReducer = handleActions({
   [actions.ADD_TASK]: (state, {payload}) => {
      const updatedTasks = [...state.tasks, 
         {
            id: uuid(),
            taskValue: payload, 
            isExecution:false,
            isEditTask: false,
            editText: ''
         }];
      return {
         ...state,
         tasks: updatedTasks,
      }
   }, 
   [actions.REMOVE_TASK]:(state, {payload}) => {
      const copyTasks = [...state.tasks]
      copyTasks.splice(payload, 1)
      return {
         ...state,
         tasks: copyTasks,
      }
   }, 
   [actions.EXECUTE_TASK]: (state,{payload}) =>{
      const copyTasks = [...state.tasks]
      copyTasks[payload].isExecution = true
      return{
         ...state,
         tasks: copyTasks,
      }
   },
   [actions.EDIT_TASK]:(state, {payload}) => {
      const copyTasks = [...state.tasks]
      copyTasks[payload].isEditTask = true
      return {
         ...state,
         tasks: copyTasks,
      }
   },
   [actions.SAVE_TASK]: (state, {payload}) => {
      const copyTasks = [...state.tasks]
      copyTasks[payload.taskIndex].taskValue = payload.value
      copyTasks[payload.taskIndex].isEditTask = false
      return {
         ...state,
         tasks: copyTasks,
      }
   }, 
   [actions.CANCEL_TASK]:(state, {payload}) => {
      const copyTasks = [...state.tasks]
      copyTasks[payload].isEditTask = false
      return {
         ...state,
         tasks: copyTasks,
      }
   },
}, defaultState)

export default tasksReducer;