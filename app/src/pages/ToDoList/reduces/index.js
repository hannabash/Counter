import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions/index";

const defaultState = {
  tasks: [],
};

const tasksReducer = handleActions(
  {
    [actions.ADD_TASK]: (state, { payload }) => {
      const newTask = {
        id: uuid(),
        text: payload,
        isEditMode: false,
        isCompleted: false,
        editText: "",
      };

      return {
        tasks: [...state.tasks, newTask],
      };
    },
    [actions.EDIT_TASK]: (state, { payload: index }) => {
      const copy = [...state.tasks];

      const currentTask = copy[index];

      currentTask.isEditMode = true;
      currentTask.editText = currentTask.text;

      return {
        tasks: copy,
      };
    },
    [actions.CHANGE_EDIT_TASK]: (state, { payload }) => {
      const copy = [...state.tasks];

      const { editText, id } = payload;

      const currentTask = copy.find((task) => task.id === id);

      currentTask.editText = editText;

      return {
        tasks: copy,
      };
    },
    [actions.SAVE_TASK]: (state, { payload }) => {
      const copy = [...state.tasks];

      const currentTask = copy[payload];

      currentTask.text = currentTask.editText;
      currentTask.isEditMode = false;

      return {
        tasks: copy,
      };
    },
    [actions.UNDO_TASK]: (state, { payload }) => {
       const copy = [...state.tasks];
       const currentTask = copy[payload];
       currentTask.isEditMode = false;
       return {
          tasks: copy,
       }
    },
    [actions.REMOVE_TASK]: (state, { payload }) => {
       const copy = [...state.tasks];
       copy.splice(payload, 1);
       return {
          tasks: copy,
       }
    },
    [actions.COMPLETE_TASK]: (state, { payload }) => {
       const copy = [...state.tasks];
       const currentTask = copy[payload];
       currentTask.isCompleted = true;
       return {
          tasks: copy,
       }
    }
  },
  defaultState
);

export default tasksReducer;
