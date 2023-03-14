import React, { useState } from 'react'
import style from './CrewContent.module.css'

export default function CrewContent(props) {
    const [data,setData]=useState({
        data:[
            {
                destination:"COMMANDER",
                title:"DOUGLAS HURLEY",
                content:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            },
            {
                destination:"MISSION SPECIALIST",
                title:"MARK SHUTTLEWORTH",
                content:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            },
            {
                destination:"PILOT",
                title:"VICTOR GLOVER",
                content:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
            },
            {
                destination:"FLIGHT ENGINEER",
                title:"ANOUSHEH ANSARI",
                content:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
            }
        ]
    })

    const handlePage=((ele)=>{
        console.log(ele)
        props.setcrewData(ele)
    })

  return (
    <div className={style.crewContent}>
        <h3>
            PICK YOUR DESTINATION
        </h3>
        <h2>
            {
                props.crewData=="COMMANDER"?data.data[0].destination:props.crewData=="MISSION SPECIALIST"?data.data[1].destination:props.crewData=="PILOT"?data.data[2].destination:props.crewData=="FLIGHT ENGINEER"?data.data[3].destination:null
            }
        </h2>
        <h1>
            {
                props.crewData=="COMMANDER"?data.data[0].title:props.crewData=="MISSION SPECIALIST"?data.data[1].title:props.crewData=="PILOT"?data.data[2].title:props.crewData=="FLIGHT ENGINEER"?data.data[3].title:null
            }
        </h1>
        <p>
            {
                props.crewData=="COMMANDER"?data.data[0].content:props.crewData=="MISSION SPECIALIST"?data.data[1].content:props.crewData=="PILOT"?data.data[2].content:props.crewData=="FLIGHT ENGINEER"?data.data[3].content:null
            }
        </p>

        <ul>
            <li onClick={(event)=>handlePage("COMMANDER")} className={props.crewData=="COMMANDER"?style.selected:null} value={"COMMANDER"}>
                
            </li>
            <li onClick={(event)=>handlePage("MISSION SPECIALIST")} className={props.crewData=="MISSION SPECIALIST"?style.selected:null} value={"MISSION SPECIALIST"}>
                
            </li>
            <li onClick={(event)=>handlePage("PILOT")} className={props.crewData=="PILOT"?style.selected:null} value={"PILOT"}>
                
            </li>
            <li onClick={(event)=>handlePage("FLIGHT ENGINEER")} className={props.crewData=="FLIGHT ENGINEER"?style.selected:null} value={"FLIGHT ENGINEER"}>
                
            </li>
            
        </ul>
    </div>
  )
}
