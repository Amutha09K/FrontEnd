import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header(props) {

    const menuArr=["01 HOME","02 DESTINATION","03 CREW","04 TECHNOLOGY"],linkArr=["/","/Destination","/Crew","/Technology"]
    let index=-1;
    const handlePageRendering=((ele)=>{
        console.log(ele.target)
        props.setpageRendering(ele.target.innerText)
    })

  return (
    <div className={style.headerWholeContainer}>
        <img src='./assets/shared/logo.svg'/>
        <hr/>
        <div className={style.headerMenuContainer}>
            {
                menuArr.map((content)=>{
                        index++
                    return (
                        <Link to={linkArr[index]}>
                    <p className={props.page=="home" && content=="01 HOME"?style.underlineHome:props.page=="destination" && content=="02 DESTINATION"?style.underlineDestination:props.page=="crew" && content=="03 CREW"?style.underlineHome:props.page=="tech" && content=="04 TECHNOLOGY"?style.underlineDestination:content=="01 HOME" || content=="03 CREW"?style.hoverEffectHome:content=="02 DESTINATION" || content=="04 TECHNOLOGY"?style.hoverEffectDestination:null} onClick={(ele)=>handlePageRendering(ele)}>
                        {content}
                    </p>
                      </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
