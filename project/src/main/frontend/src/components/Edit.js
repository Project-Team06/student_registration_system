import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


function Edit(){

    const [fName, setFName] = useState();
    const [lName, setlName] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const errorMsg = document.querySelector(".error-msg");
    const successMsg = document.querySelector(".success-msg");

    const state = useSelector((state) => {
        return {
          student: state.student.student,
        };
      });

    let id =  state.student[0].id
    let courses = []
   


    const fristName = (e) =>{
        setFName(e.target.value);
    }

    const lastName = (e) =>{
        setlName(e.target.value);
    }

    const studentPassword = (e) =>{
        setPassword(e.target.value);
    }

    const studentPassword2 = (e) =>{
        setPassword2(e.target.value);
    }

    const inputData = (e) =>{
        e.preventDefault();

        if(password == password2){
        let data ={
            id: 4,
            fName: fName,
            lName: lName,
            password: password,
            courses: courses
        }

        console.log(fName);
        console.log(lName);
        console.log(password);
        console.log(state.student[0].id);
        console.log(data);

        
        axios.put(`http://localhost:8083/students/${id}`, data)
          .catch((error) => console.log(error));

          successMsg.style.opacity = 1;
          errorMsg.style.opacity = 0;

    }
    else{
        
        errorMsg.style.opacity = 1;
        successMsg.style.opacity = 0;
    }
    
       

    }


    // useEffect(() => {
    //     axios
    //       .get("http://localhost:8080/students/{id}")
    //       .then((response) => setData(response.data))
    //       .catch((error) => console.log(error));
    //   }, []);


    return (
        <div>
           
            <div>
            <Link to="/Table">
            <img  className="backimg" src="https://cdn-icons-png.flaticon.com/128/1053/1053188.png"/>
            </Link>
            </div>

            <div className="success-msg">
            <b>Success!</b> The password has been changed successfully
            </div>
            
          <div class="login">
            <h1>Edit Information</h1>
            {/* <form method="post"> */}
              <input
                type="text"
               onChange={fristName}
                name="fName"
                placeholder="First Name"
                required="required"
              />
               <input
                type="text"
               onChange={lastName}
                name="lName"
                placeholder="Last Name"
                required="required"
              />
              <input
                type="text"
                onChange={studentPassword}
                name="password"
                placeholder="password"
                required="required"
               
              />
               <input
                type="text"
                onChange={studentPassword2}
                name="password"
                placeholder="Retype the password"
                required="required"
           
            />
               <div id="error-msg-holder">
                <p className="error-msg">Password does not match</p>
                </div>            
              <button type="submit" onClick={inputData} className="btn btn-primary btn-block btn-large">
              Edit
                 { /*result ? <Link to="/Table"></Link>  : console.log() */}
              </button>
    
              {/* <p className="btn btn-primary btn-block btn-large">
             onClick={verification} <Link to="/Table"> Log in</Link>
              </p> */}
            {/* </form> */}
          </div>
        </div>
      );

};

export default Edit;