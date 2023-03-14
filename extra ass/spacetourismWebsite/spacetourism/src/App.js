import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Crew from './Component/Crew/Crew';
import Destination from './Component/Destination/Destination';
import Home from './Component/Home/Home';
import Technology from './Component/Technology/Technology';
// imprt Route

function App() {
  const [pageRendering,setpageRendering]=useState("01 HOME")
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destination" element={<Destination/>} />
        <Route path="/Crew" element={<Crew/>} />
        <Route path="/Technology" element={<Technology/>} />
      </Routes>
    </div>
  );
}

export default App;
