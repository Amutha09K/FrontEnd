import React, { useState } from 'react'
import style from "./TechContent.module.css";

export default function TechContent(props) {
    const [data,setData]=useState({
        data:[
            {
                title:"LAUNCH VEHICLE",
                content:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            },
            {
                title:"SPACEPORT",
                content:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
            },
            {
                destination:"THE TERMINOLOGY…",
                title:"SPACE CAPSULE",
                content:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            }
        ]
    })

    const handlePage=((ele)=>{
        props.settechData(ele)
    })


  return (
    <div className={style.crewContent}>
        <h3>
            SPACE LAUNCH 101
        </h3>
        <h2>
            THE TERMINOLOGY…
        </h2>
        <h1>
            {
                props.techData=="LAUNCH VEHICLE"?data.data[0].title:props.techData=="SPACEPORT"?data.data[1].title:props.techData=="SPACE CAPSULE"?data.data[2].title:null
            }
        </h1>
        <p>
            {
                props.techData=="LAUNCH VEHICLE"?data.data[0].content:props.techData=="SPACEPORT"?data.data[1].content:props.techData=="SPACE CAPSULE"?data.data[2].content:null
            }
        </p>

        <ul>
            <li onClick={(event)=>handlePage("LAUNCH VEHICLE")} className={props.techData=="LAUNCH VEHICLE"?style.selected:null}>
                
            </li>
            <li onClick={(event)=>handlePage("SPACEPORT")} className={props.techData=="SPACEPORT"?style.selected:null}>
                
            </li>
            <li onClick={(event)=>handlePage("SPACE CAPSULE")} className={props.techData=="SPACE CAPSULE"?style.selected:null}>
                
            </li>
            
        </ul>
    </div>
  )
}
