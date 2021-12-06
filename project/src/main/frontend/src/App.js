import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Course from "./components/Course";
import LogIn from "./components/Login";
import Table from "./components/Table";

function App() {

  return (

    <BrowserRouter>
    
      <div>
        <Routes>
      {/* <LogIn></LogIn> 
      <Table></Table>*/}
      
      <Route  path="/" element={<LogIn />} />
     
      <Route path="/Table" element={<Table/>} />
      <Route path="/course" element={<Course/>} />
      </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
