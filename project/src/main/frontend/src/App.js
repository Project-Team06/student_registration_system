import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login";
import Table from "./components/Table";
import Edit from "./components/Edit";

function App() {

  return (

    <BrowserRouter>
    
      <div>
        <Routes>
      {/* <LogIn></LogIn> 
      <Table></Table>*/}
      
      <Route  path="/" element={<LogIn />} />
      <Route path="/Table" element={<Table/>} />
      <Route path="/Edit" element={<Edit/>} />
      </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
