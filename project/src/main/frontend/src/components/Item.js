function Item({ course }) {

  return (
    <div className="align">
      {/* course box */}
      <div className="cd-timeline-content cd-right cd-container design">
        <h4>{course.courseName}</h4>
        Time: {course.startTime} - {course.endTime}
        <br />
        room id: {course.roomID}
        <br />
        final Exam Date: {course.roomID}
      </div>
    </div>
  );
}
export default Item;
