import React, { useState } from 'react'
import Header from '../Header/Header'
import style from './Destination.module.css'
import DestinationContent from './DestinationContent/DestinationContent'
import DestinationImg from './DestinationImage/DestinationImg'


export default function Destination(props) {
    const [destination,setdestination]=useState("MOON");
  return (
    <div className={style.destinationWholeContainer}>
        <Header page={"destination"} setpageRendering={props.setpageRendering}/>
        <div className={style.destinationContentContainer}>
            <DestinationImg setdestination={setdestination} destination={destination}/>
            <DestinationContent setdestination={setdestination} destination={destination}/>
        </div>
    </div>
  )
}
