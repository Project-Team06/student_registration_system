import { Link, useNavigate   } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Table from './Table';


function LogIn() {

  const [studentIdNumber, setStudentId] = useState();
  const [studentPassword, setPassword] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();
  let result = false

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
      { result = true }
      else{
        result = false
      }
    }
    
   });

  if(result)
   navigate("/Table");
   


   e.preventDefault();
   if(result == false) 
   alert("The password or username is wrong")
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
