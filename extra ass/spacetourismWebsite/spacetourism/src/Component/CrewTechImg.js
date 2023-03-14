import React from 'react'
import style from './CrewTechImg.module.css'

export default function CrewTechImg(props) {
    console.log(props.techData)
    console.log(props.crewData)
    console.log("HII")
  return (
    <div className={style.crewImgContainer}>
        {/* <> */}
        { 
            props.crewData!=undefined?<img src={props.crewData=="COMMANDER"?"./assets/crew/image-douglas-hurley.png":props.crewData=="MISSION SPECIALIST"?"./assets/crew/image-mark-shuttleworth.webp":props.crewData=="PILOT"?"./assets/crew/image-victor-glover.png":props.crewData=="FLIGHT ENGINEER"?"./assets/crew/image-anousheh-ansari.png":null}/>:null
        }
        {/* </>
        <> */}
        {
            props.techData!=undefined?<img src={props.techData=="LAUNCH VEHICLE"?"./assets/technology/image-launch-vehicle-portrait.jpg":props.techData=="SPACEPORT"?"./assets/technology/image-spaceport-portrait.jpg":props.techData=="SPACE CAPSULE"?"./assets/technology/image-space-capsule-portrait.jpg":null}/>:null
        }
        {/* </> */}
    </div>
  )
}
