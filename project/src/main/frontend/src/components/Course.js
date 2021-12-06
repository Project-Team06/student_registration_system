import Item from "./Item";
import { useSelector } from "react-redux";

function Course({ course }) {
  const state = useSelector((state) => {
    return {
      schedule: state.schedule.schedule,
    };
  });
  return (
    <div>
      <div>
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Sun
              </div>
              {state.schedule[0][0].map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Item course={course} />;
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
              {state.schedule[0][1].map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Item course={course} />;
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
              {state.schedule[0][2].map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Item course={course} />;
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
              {state.schedule[0][3].map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Item course={course} />;
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
              {state.schedule[0][4].map((course) => {
                console.log(course);
                if (course != undefined) {
                  return <Item course={course} />;
                }
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Course;
