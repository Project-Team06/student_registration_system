import { createStore, combineReducers } from "redux";
import courses from "./courses/courses";
import schedule from "./schedule/schedule";
import worning from "./worning/worning";

const reducers = combineReducers({ courses, schedule, worning });

const store = createStore(reducers);

export default store;
