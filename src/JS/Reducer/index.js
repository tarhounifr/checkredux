import { combineReducers } from "redux";


import TaskReducer from "./listTask";

//index c est just elli ylem les reducers dans ce cas on  a just TaskReducer 
const rootReducer=combineReducers({task:TaskReducer});

//hatha t exportih bach t importih fel store 
export default rootReducer;