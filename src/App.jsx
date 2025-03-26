import NavBar from './components/navBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/dropdown';
import Pg1 from './Pages/pg1';
import Pg2 from './Pages/pg2';
import Pg3 from './Pages/pg3';


import Header from './Components/header'

function App() {
  return (
    <>
    
<Header/>
      <BrowserRouter >
      <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/pag1" element={<Pg1 />}></Route>
      <Route path="/pag2" element={<Pg2 />}></Route>
      <Route path="/pag3" element={<Pg3 />}></Route>
     </Routes >
      </BrowserRouter> 

      
    </>
  );
}

export default App;