function Item({ course }) {

  return (
    <div className="align">
      {/* course box */}
      <div className="cd-timeline-content cd-right cd-container design">
      <h4>{course.name}</h4>
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
          
      </div>
    </div>
  );
}
export default Item;
