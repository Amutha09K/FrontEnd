import React, { useState } from 'react';
import style from './DestinationContent.module.css'

export default function DestinationContent(props) {

    const [data,setData]=useState({
        destination:[
            {
                title:"MOON",
                content:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                distance:"384,400 KM",
                year:"3 DAYS"
            },
            {
                title:"MARS",
                content:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                distance:"225 MIL. KM",
                year:"9 MONTHS"
            },
            {
                title:"EUROPA",
                content:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                distance:"628 MIL. KM",
                year:"3 YEARS"
            },
            {
                title:"TITAN",
                content:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                distance:"1.6 BIL. KM",
                year:"7 YEARS"
            }
        ]
    })

    const handleContent=((ele)=>{
        console.log(ele.target.innerText)
        props.setdestination(ele.target.innerText)
    })

  return (
    <div className={style.destination}>
        <div className={style.destinationContentHeader}>
            <ul>
                <li onClick={(event)=>handleContent(event)} className={props.destination=="MOON"?style.underline:null}>
                    MOON
                </li>
                <li onClick={(event)=>handleContent(event)} className={props.destination=="MARS"?style.underline:null}>
                    MARS
                </li>
                <li onClick={(event)=>handleContent(event)} className={props.destination=="EUROPA"?style.underline:null}>
                    EUROPA
                </li>
                <li onClick={(event)=>handleContent(event)} className={props.destination=="TITAN"?style.underline:null}>
                    TITAN
                </li>
            </ul>
        </div>
        <div className={style.contents}>
            <h1>
            {
                props.destination=="MOON"?data.destination[0].title:props.destination=="MARS"?data.destination[1].title:props.destination=="EUROPA"?data.destination[2].title:props.destination=="TITAN"?data.destination[3].title:null
            }
            </h1>
            <p>
            {
                props.destination=="MOON"?data.destination[0].content:props.destination=="MARS"?data.destination[1].content:props.destination=="EUROPA"?data.destination[2].content:props.destination=="TITAN"?data.destination[3].content:null
            }
            </p>
            <hr/>
            <div class={style.footer}>
                <p className={style.avgP}>
                AVG. DISTANCE
                </p>
                <p className={style.travelP}>
                EST. TRAVEL TIME
                </p>
                <h3 className={style.kiloMeter}>
                {
                    props.destination=="MOON"?data.destination[0].distance:props.destination=="MARS"?data.destination[1].distance:props.destination=="EUROPA"?data.destination[2].distance:props.destination=="TITAN"?data.destination[3].distance:null
                }
                </h3>
                <h3 className={style.years}>
                {
                    props.destination=="MOON"?data.destination[0].year:props.destination=="MARS"?data.destination[1].year:props.destination=="EUROPA"?data.destination[2].year:props.destination=="TITAN"?data.destination[3].year:null
                }
                </h3>
            </div>
        </div>
    </div>
  )
}
