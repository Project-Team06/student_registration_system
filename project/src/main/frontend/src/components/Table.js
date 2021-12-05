import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCourses } from "../reducers/courses/courses";
import { addSchedule } from "../reducers/schedule/schedule";
import sunday, { AddToSunday } from "../reducers/days/sunday";
import monday, { AddToMonday } from "../reducers/days/monday";
import tuesday, { AddToTuesday } from "../reducers/days/tuesday";
import { AddToWednesday } from "../reducers/days/wednesday";
import { AddToThursday } from "../reducers/days/thursday";
import Menu from "./Menu";
import Courses from "./Courses";
import Worning from "./Worning";
import { addWorning } from "../reducers/worning/worning";

function Table() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      courses: state.courses.courses,
    };
  });

  const schedule = useSelector((state) => {
    return {
      schedule: state.schedule.schedule,
    };
  });

  const state2 = useSelector((state) => {
    return {
      student: state.student.student,
    };
  });

  const [courses, setCourses] = useState([]);
  const [sun, setSun] = useState([]);
  const [mon, setMon] = useState([]);
  const [tues, setTues] = useState([]);
  const [wed, setWed] = useState([]);
  const [thur, setThur] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8083/course")
      .then((response) => setCourses(response.data))
      .catch((error) => console.log(error));
  }, []);

  const removeCourses = () => {
    const action = clearCourses();
    dispatch(action);
    dispatch(addWorning(""));
  };
  const addCourses = () => {
    console.log(state.courses);
    const action = addSchedule(state.courses);
    dispatch(action);
    if (schedule.schedule.length != 0) {
      checkDays();
    }
  };
  function checkDays() {
    let arr = state.courses;
    let sunArr = [];
    let monArr = [];
    let tuesArr = [];
    let wedArr = [];
    let thuArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].day === "Sunday") {
        sunArr.push(arr[i]);
      } else if (arr[i].day === "Monday") {
        monArr.push(arr[i]);
      } else if (arr[i].day === "Tuesday") {
        tuesArr.push(arr[i]);
      } else if (arr[i].day === "Wednesday") {
        wedArr.push(arr[i]);
      } else if (arr[i].day === "Thursday") {
        thuArr.push(arr[i]);
      }
    }
    let temp = 0;
    for (let i = 0; i < sunArr.length; i++) {
      for (let j = i + 1; j < sunArr.length; j++) {
        if (sunArr[i].start_time < sunArr[i + 1].start_time) {
          temp = sunArr[i];
          sunArr[i] = sunArr[i + 1];
          sunArr[i + 1] = temp;
        }
      }
    }
    temp = 0;
    for (let i = 0; i < monArr.length; i++) {
      for (let j = i + 1; j < monArr.length; j++) {
        if (monArr[i].start_time < monArr[i + 1].start_time) {
          temp = monArr[i];
          monArr[i] = monArr[i + 1];
          monArr[i + 1] = temp;
        }
      }
    }
    temp = 0;
    for (let i = 0; i < tuesArr.length; i++) {
      for (let j = i + 1; j < tuesArr.length; j++) {
        if (tuesArr[i].start_time < tuesArr[i + 1].start_time) {
          temp = tuesArr[i];
          tuesArr[i] = tuesArr[i + 1];
          tuesArr[i + 1] = temp;
        }
      }
    }
    temp = 0;
    for (let i = 0; i < wedArr.length; i++) {
      for (let j = i + 1; j < wedArr.length; j++) {
        if (wedArr[i].start_time < wedArr[i + 1].start_time) {
          temp = wedArr[i];
          wedArr[i] = wedArr[i + 1];
          wedArr[i + 1] = temp;
        }
      }
    }
    temp = 0;
    for (let i = 0; i < thuArr.length; i++) {
      for (let j = i + 1; j < thuArr.length; j++) {
        if (thuArr[i].start_time < thuArr[i + 1].start_time) {
          temp = thuArr[i];
          thuArr[i] = thuArr[i + 1];
          thuArr[i + 1] = temp;
        }
      }
    }

    setSun(sunArr);
    setMon(monArr);
    setTues(tuesArr);
    setWed(wedArr);
    setThur(thuArr);
    dispatch(AddToSunday(sunArr));
    dispatch(AddToMonday(monArr));
    dispatch(AddToTuesday(tuesArr));
    dispatch(AddToWednesday(wedArr));
    dispatch(AddToThursday(thuArr));
  } //end of checkDays function

  return (
    <div>
      <div className="welcome">
        <h1>
          {" "}
          welcome: {state2.student[0].fName} {state2.student[0].lName}
        </h1>
      </div>
      {/* Drop dowun meno */}
      <div className="menu">
        <Menu courses={courses} setCourses={setCourses} />
      </div>
      <div className="alignCourses">
        {state.courses.map((course) => {
          return <Courses course={course} />;
        })}
      </div>
      <div>
        <Worning />
      </div>
      <div>
        <button onClick={addCourses} className="addCoursesButton">
          Add Courses
        </button>
        <button onClick={removeCourses} className="addCoursesButton">
          Remove all
        </button>
      </div>
      {/* table */}
      <div>
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Sun
              </div>
              {sun.map((course, i) => {
                if (course != undefined) {
                  return <Courses course={course} />;
                }
              })}
            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Mon
              </div>

              {mon.map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Courses course={course} />;
                }
              })}
            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Tue
              </div>
              {tues.map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Courses course={course} />;
                }
              })}
              <br />
            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Wed
              </div>
              {wed.map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Courses course={course} />;
                }
              })}
            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Thu
              </div>
              {thur.map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Courses course={course} />;
                }
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Table;
