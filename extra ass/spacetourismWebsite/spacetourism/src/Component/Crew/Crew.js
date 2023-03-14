import React, { useState } from 'react'
import CrewTechImg from '../CrewTechImg'
import Header from '../Header/Header'
import style from './Crew.module.css'
import CrewContent from './CrewContent/CrewContent'

export default function Crew(props) {
    const [crewData,setcrewData]=useState("COMMANDER")
  return (
    <div className={style.crewWholeContainer}>
        <Header page={"crew"} setpageRendering={props.setpageRendering}/>
        <div className={style.crewWholeContentContainer}>
            <CrewContent crewData={crewData} setcrewData={setcrewData}/>
            <CrewTechImg crewData={crewData} setcrewData={setcrewData}/>
        </div>
    </div>
  )
}
