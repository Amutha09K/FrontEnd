import React, { useState } from 'react'
import Header from '../Header/Header'
import style from "./Technology.module.css";
import CrewTechImg from '../CrewTechImg'
import TechContent from './TechContent/TechContent';
import TechImg from './TechImg/TechImg';

export default function Technology(props) {
    const [techData,settechData]=useState("LAUNCH VEHICLE")
  return (
    <div className={style.techWholeContainer}>
        <Header page={"tech"} setpageRendering={props.setpageRendering}/>
        <div className={style.techwWholeContentContainer}>
            <TechImg techData={techData} settechData={settechData}/>
            <TechContent techData={techData} settechData={settechData}/>
            
        </div>
    </div>
  )
}
