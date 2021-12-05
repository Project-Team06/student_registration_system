import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
      </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
