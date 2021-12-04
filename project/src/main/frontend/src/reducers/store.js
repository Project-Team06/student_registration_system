import { createStore, combineReducers } from "redux";
import courses from "./courses/courses";
import schedule from "./schedule/schedule";

const reducers = combineReducers({ courses, schedule });

const store = createStore(reducers);

export default store;
