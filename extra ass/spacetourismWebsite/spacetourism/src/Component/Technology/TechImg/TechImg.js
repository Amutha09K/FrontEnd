import React from 'react'
import style from './TechImg.module.css'

export default function TechImg(props) {
  return (
    <div className={style.crewImgContainer}>
      <img src={props.techData=="LAUNCH VEHICLE"?"./assets/technology/image-launch-vehicle-portrait.jpg":props.techData=="SPACEPORT"?"./assets/technology/image-spaceport-portrait.jpg":props.techData=="SPACE CAPSULE"?"./assets/technology/image-space-capsule-portrait.jpg":null}/>
    </div>
  )
}
