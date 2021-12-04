import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../reducers/courses/courses";
import { useState } from "react";

function MenuItem({ course }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      courses: state.courses.courses,
    };
  });
  const addCourseClicked = () => {
    dispatch(addCourse(course));
  };
  return (
    <>
      <button onClick={addCourseClicked} className="menuButton">
        {course.name}
      </button>
    </>
  );
}
export default MenuItem;
