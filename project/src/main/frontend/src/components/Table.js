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
import Item from "./Item";
import Menu from "./Menu";
import Courses from "./Courses";
import Worning from "./Worning";
import student from "../reducers/student/student";
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

  const schedule = useSelector((state) => {

    return {
      schedule: state.schedule.schedule,
    };
  });


  const sunday = useSelector((state)=>{
    return{
      sunday:state.sunday.sunday,
    }
  })

  const monday = useSelector((state)=>{
    return{
      monday:state.monday.monday,
    }
  })

  const tuesday = useSelector((state)=>{
    return{
      tuesday:state.tuesday.tuesday,
    }
  })

  const wednesday = useSelector((state)=>{
    return{
      wednesday:state.wednesday.wednesday,
    }
  })

  const thursday = useSelector((state)=>{
    return{
      thursday:state.thursday.thursday,
    }
  })

  const state2 = useSelector((state) => {
    return {
      student: state.student.student,
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
    console.log(schedule.schedule);
    if(schedule.schedule.length != 0){
      checkDays();
      SortSun();
    }
   
  };
  function checkDays() {
    let arr = schedule.schedule[0];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].day === "Sunday") {
        const action = AddToSunday(arr[i]);
        dispatch(action);
      }
      else if(arr[i].day === "Monday"){
        const action = AddToMonday(arr[i]);
        dispatch(action);
    }
    else if(arr[i].day === "Tuesday"){
        const action = AddToTuesday(arr[i]);
        dispatch(action);
      }else if(arr[i].day === "Wednesday"){
        const action = AddToWednesday(arr[i]);
        dispatch(action);
      }else if(arr[i].day === "Thursday"){
        const action = AddToThursday(arr[i]);
        dispatch(action);
  }
}
  }//end of checkDays function

  function SortSun(){
    let sundayArray=sunday.sunday;
    let temp=0;
    console.log(sunday.sunday);
    for (let i = 0; i < sundayArray.length; i++) {
      console.log(sundayArray[i]);
      if(sundayArray[i].startTime > sundayArray[i+1].startTime){
         temp=sundayArray[i];
         sundayArray[i]=sundayArray[i+1]
         sundayArray[i+1]=temp
      }
    }
    
  }

  console.log("MONDAY ARRAY");
  console.log(monday.monday);
  return (
    <div>

      <div className="welcome">
      <h1> welcome: {state2.student[0].fName}   {state2.student[0].lName}</h1>
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

              {sunday.sunday.map((course) => {
                console.log(course);
                if(course !=undefined){
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

              {monday.monday.map((course) => {
                console.log(course);
                if(course !=undefined){
                  return <Courses course={course} />;
                };
              //   else
              // return null;
              })} 

            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Tue
              </div>

              {tuesday.tuesday.map((course) => {
                console.log(course);
                if(course !=undefined){
                  return <Courses course={course} />;
                };
              })} 


              <br/>

            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Wed
              </div>

              {wednesday.wednesday.map((course) => {
                console.log(course);
                if(course !=undefined){
                  return <Courses course={course} />;
                };
              })} 
      
            </div>
          </div>
          <div class="cd-timeline-block">
            <div className="align">
              <div class="cd-timeline-img cd-picture">
                <br />
                Thu
              </div>

              {thursday.thursday.map((course) => {
                console.log(course);
                if(course !=undefined){
                  return <Courses course={course} />;
                };
              })} 
              {/* {list.map((course) => {
                if(course[4]!= undefined)
                return <Courses course={course[4]}/>;
              })} */}

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Table;
