import { useDispatch } from "react-redux";
import { removeCourse } from "../reducers/courses/courses";

function Courses({ course }) {
  const dispatch = useDispatch();

  const removeClicked = () => {
    const action = removeCourse(course);
    dispatch(action);
  };
  return (
    <div>
      {/* course box */}
      <div className="alignCourses">
        <div className="cd-timeline-content cd-right cd-container courseBox">
          <h4>{course.name}</h4>
          <br />
          Course id: {course.course_id}
          <br />
          Course hours: {course.hours}
          <br />
          Lecture day: {course.day}
          <br />
          Time: {course.start_time} - {course.end_time}
          <br />





























          Final exam date: {course.final_exam_date}
          <br />
          Instructor: {course.instructors.fname} {course.instructors.lname}

          <div>
            <button
              onClick={removeClicked}
              type="button"
              class="btn btn-warning btn-circle btn-lg"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
