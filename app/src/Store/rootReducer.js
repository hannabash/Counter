import {combineReducers} from 'redux';

import tasksPage from '../pages/ToDoList/reduces/index'
import pokemonsPage from '../pages/AsyncOperationsPage/reduces'

const rootReducer = combineReducers({tasksPage, pokemonsPage});

export default rootReducer;