import { Link, useNavigate   } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Table from './Table';
import { addStudent } from "../reducers/student/student";



function LogIn() {

  const [studentIdNumber, setStudentId] = useState();
  const [studentPassword, setPassword] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const loginErrorMsg = document.getElementById("login-error-msg");
  let result = false

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      student: state.student.student,
    };
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/students")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const studentId = (e) =>{
    setStudentId(e.target.value);
  };

  const password = (e) =>{
    setPassword(e.target.value);
  };

  const verification = (e) =>{
    e.preventDefault();
    console.log(data);


    data.forEach(element => {
     
    if(element.id == studentIdNumber){
      if(element.password == studentPassword)
      { result = true
        dispatch(addStudent(element));
       }
      else{
        result = false
      }
    }
    
   });

  if(result)
   navigate("/Table");
   


   e.preventDefault();
   if(result == false){
   //alert("The password or username is wrong")
   loginErrorMsg.style.opacity = 1;
   }
   
   e.preventDefault(); 


  };

  return (
    <div>
      <div class="login">
        <h1>Login</h1>
        <form method="post">
          <input
            type="text"
            onChange={studentId}
            name="student_ID"
            placeholder="student_ID"
            required="required"
          />
          <input
            type="password"
            onChange={password}
            name="password"
            placeholder="password"
            required="required"
           
          />
           <div id="login-error-msg-holder">
           <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>

            </div>
          <button type="submit" onClick={verification} className="btn btn-primary btn-block btn-large">
          Log in
             { /*result ? <Link to="/Table"></Link>  : console.log() */}
          </button>

          {/* <p className="btn btn-primary btn-block btn-large">
         onClick={verification} <Link to="/Table"> Log in</Link>
          </p> */}
        </form>
      </div>
    </div>
  );
}
export default LogIn;
