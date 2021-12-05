import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../reducers/courses/courses";
import { addWorning } from "../reducers/worning/worning";

function MenuItem({ course }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      courses: state.courses.courses,
    };
  });
  const addCourseClicked = () => {
    if (state.courses.length === 0) {
      dispatch(addCourse(course));
    } else {
      if (checkNames() !== 0) {
        if (checkFinalDates() !== 0) {
          if (checkTimes() !== 0) {
            dispatch(addCourse(course));
          } else {
            dispatch(addWorning("* Cannot add same time"));
          }
        } else {
          dispatch(addWorning("* Cannot add same final date exists"));
        }
      } else {
        dispatch(addWorning("* Cannot add same course twice"));
      }
    }
  };

  function checkNames() {
    let arr = state.courses;
    let check = 1;
    for (let i = 0; i < arr.length; i++) {
      if (course.name === arr[i].name) {
        check = 0;
      }
    }
    return check;
  }
  function checkFinalDates() {
    let arr = state.courses;
    let check = 1;
    for (let i = 0; i < arr.length; i++) {
      if (course.final_exam_date === arr[i].final_exam_date) {
        check = 0;
      }
    }
    return check;
  }
  function checkTimes() {
    let arr = state.courses;
    let check = 1;
    for (let i = 0; i < arr.length; i++) {
      if (course.start_time === arr[i].start_time) {
        check = 0;
      }
    }
    return check;
  }

  return (
    <>
      <button onClick={addCourseClicked} className="menuButton">
        {course.name}
      </button>
    </>
  );
}
export default MenuItem;
