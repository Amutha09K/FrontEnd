import React, { useState } from 'react'
import style from './DestinationImg.module.css'

export default function DestinationImg(props) {
    const [data,setData]=useState({
        destination:[
            {
                src:"3 DAYS"
            },
            {
                src:"./assets/destination/image-mars.webp"
            },
            {
                src:"3 srcS"
            },
            {
                title:"1.6 BIL. KM",
                src:"7 YEARS"
            }
        ]
    })


  return (
    <div className={style.DestinationImgContainer}>
        <h3>
            PICK YOUR DESTINATION
        </h3>
        <img src={props.destination=="MOON"?"./assets/destination/image-moon.png":props.destination=="MARS"?"./assets/destination/image-mars.webp":props.destination=="EUROPA"?"./assets/destination/image-europa.png":props.destination=="TITAN"?"./assets/destination/image-titan.png":null}/>
    </div>
  )
}
