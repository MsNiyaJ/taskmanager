import taskReducer from './tasks';
import displayReducer from './display';
import { combineReducers } from '@reduxjs/toolkit';

const allReducers = combineReducers({
  tasks: taskReducer,
  display: displayReducer,
});

export default allReducers;
