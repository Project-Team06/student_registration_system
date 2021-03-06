import { createStore, combineReducers } from "redux";
import courses from "./courses/courses";
import schedule from "./schedule/schedule";
import worning from "./worning/worning";
import sunday from "./days/sunday";
import monday from "./days/monday";
import tuesday from "./days/tuesday";
import wednesday from "./days/wednesday";
import thursday from "./days/thursday";
import student from "./student/student"
const reducers = combineReducers({ courses, schedule, worning ,sunday,monday,tuesday,wednesday,thursday,student });


const store = createStore(reducers);

export default store;
