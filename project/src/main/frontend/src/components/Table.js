import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCourses } from "../reducers/courses/courses";

import schedule, { addSchedule } from "../reducers/schedule/schedule";
import Item from "./Item";
import Menu from "./Menu";
import Courses from "./Courses";

import Worning from "./Worning";
import { addWorning } from "../reducers/worning/worning";
const list = [
  {
    id: "1",
    courseName: "Programming language",
    finalExamDate: new Date(2020, 1, 17),
    roomID: "1c-350",
    startTime: "3:00",
    endTime: "5:00",
    day: "Mon",
  },
  {
    id: "2",
    courseName: "Algorithm",
    finalExamDate: new Date(2020, 1, 18),
    roomID: "1c-349",
    startTime: "1:00",
    endTime: "3:40",
    day: "Tue",
  },
  {
    id: "3",
    courseName: "Computer Architecture",
    finalExamDate: new Date(2020, 1, 20),
    roomID: "1c-344",
    startTime: "3:00",
    endTime: "5:00",
    day: "Sun",
  },
];
function Table() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      courses: state.courses.courses,
    };
  });

  const state1 = useSelector((state) => {
    return {
      schedule: state.schedule.schedule,
    };
  });



  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios

      .get("http://localhost:8080/course")

      .then((response) => setCourses(response.data))
      .catch((error) => console.log(error));
  }, []);

  const removeCourses = () => {
    const action = clearCourses();
    dispatch(action);
    dispatch(addWorning(""));
  };
  const addCourses = () => {
    const action = addSchedule(state.courses);
    dispatch(action);
  };
  return (
    <div>
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

              <br/>
              {state1.schedule.map((course) => {
                return <Courses course={course[0]} />;

              })}
            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Mon
              </div>

              <br/>
              {/* {list.map((course) => {
                return <Item course={course} />;
              })} */}

            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Tue
              </div>

              <br/>
              {/* {list.map((course) => {
                return <Item course={course} />;
              })} */}

            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Wed
              </div>

              <br/>
              {/* {list.map((course) => {
                return <Item course={course} />;
              })} */}

            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Thu
              </div>

              <br/>

              {list.map((course) => {
                return <Item course={course} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Table;
