import React, { useState } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    const [form,setForm]=useState("false")
    const EmailValidation=(()=>{
        
            // alert("Schedule a Demo button clicked")
            setForm("true")
        })
        const closePopUp=(()=>{
            setForm("false")
        })
  return (
    <>
    {
        form=="true"?<div className={style.popUp}>
            <div className={style.emailPopUp}>
                <button onClick={closePopUp}>X</button>
                <h2>
                    Your Mail ID :
                </h2>
                <p>
                    {localStorage.getItem("popup")}
                </p>
            </div>
        </div>:null
    }
    <div class={style.HeaderWholeContainer}>
        <Link to="/">
        <img src='/images/logo.svg' className={style.logoImg}/>
        </Link>
        <ul>
            <Link to="/Price">
            <li>
                Pricing
            </li>
            </Link>
            <Link to="/About">
            <li>
                About
            </li>
            </Link>
            <Link to="/Contact">
            <li>
                Contact
            </li>
            </Link>
        </ul>
        <button className={style.ScheduleDemoBtn} onClick={EmailValidation}>Schedule a Demo</button>
    </div>
    </>
  )
}
