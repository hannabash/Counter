import { createAction } from "redux-actions";

export const ADD_TASK = createAction("ADD_TASK");
export const COMPLETE_TASK = createAction("COMPLETE_TASK");
export const REMOVE_TASK = createAction("REMOVE_TASK");
export const EDIT_TASK = createAction("EDIT_TASK");
export const SAVE_TASK = createAction("SAVE_TASK");
export const CHANGE_EDIT_TASK = createAction("CHANGE_EDIT_TASK");
export const UNDO_TASK = createAction("UNDO_TASK");
