import Item from "./Item";

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
  return (
    <div>
      <section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
          <div className="align">
            <div class="cd-timeline-img cd-picture">
              <br />
              Sun
            </div>
            {list.map((course) => {
              return <Item course={course} />;
            })}
          </div>
        </div>
        <div class="cd-timeline-block">
          <div className="align">
            <div class="cd-timeline-img cd-picture">
              <br />
              Mon
            </div>
            {list.map((course) => {
              return <Item course={course} />;
            })}
          </div>
        </div>
        <div class="cd-timeline-block">
          <div className="align">
            <div class="cd-timeline-img cd-picture">
              <br />
              Tue
            </div>
            {list.map((course) => {
              return <Item course={course} />;
            })}
          </div>
        </div>
        <div class="cd-timeline-block">
          <div className="align">
            <div class="cd-timeline-img cd-picture">
              <br />
              Wed
            </div>
            {list.map((course) => {
              return <Item course={course} />;
            })}
          </div>
        </div>
        <div class="cd-timeline-block">
          <div className="align">
            <div class="cd-timeline-img cd-picture">
              <br />
              Thu
            </div>
            {list.map((course) => {
              return <Item course={course} />;
            })}
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
}
export default Table;
