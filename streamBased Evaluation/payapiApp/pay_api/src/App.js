import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import React from "react";
import MainContent from "./Component/MainContent/MainContent";
import style from "./App.module.css"
import Pricing from "./Component/Pricing/Pricing";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import {Route,Routes} from 'react-router-dom';


function App() {

  if(!localStorage.getItem("popup"))
  {
      localStorage.setItem("popup","No email added")
  }
  return (
    <div className={style.wholeContainer}>
      <Routes>
        <Route path="/" element={<MainContent/>} />
        <Route path="/Price" element={<Pricing/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
   </div>
  );
}

export default App;
