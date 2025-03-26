import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdown from "./Pages/dropdown";
import Pg1 from "./Pages/pg1";
import Pg2 from "./Pages/pg2";
import Pg3 from "./Pages/pg3";
import Navbar from "./Components/Navbar"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Dropdown/>}/>          
          <Route path="/pg1" element={<Pg1/>}/>
          <Route path="/pg2" element={<Pg2/>}/>
          <Route path="/pg3" element={<Pg3/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
