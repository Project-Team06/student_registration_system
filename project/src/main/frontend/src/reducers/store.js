import { createStore, combineReducers } from "redux";
import courses from "./courses/courses";
import schedule from "./schedule/schedule";
import worning from "./worning/worning";
import student from "./student/student"

const reducers = combineReducers({ courses, schedule, worning, student });

const store = createStore(reducers);

export default store;
