import Item from "./Item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Course({ course }) {
  const state = useSelector((state) => {
    return {
      schedule: state.schedule.schedule,
    };
  });
  return (
    <div>
     
            <Link to="/Table">
              <div className="backimg">
              <img  className="backimg" src="https://cdn-icons-png.flaticon.com/128/1053/1053188.png"/>
             {/* <h1 className="go_back">Go back</h1> */}
             </div>
            </Link>
           
    <div className="SSh1">
      <h1>Student Schedule</h1>
      </div>
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
