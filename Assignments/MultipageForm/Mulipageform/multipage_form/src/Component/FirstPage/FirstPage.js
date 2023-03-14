import React, { useContext,useRef, useState } from 'react'
import { userContext } from '../../App'
import style from './FirstPage.module.css'

export default function FirstPage(props) {

    const inputArr=[
        {
            title:"Name",
            placeHolder:"e.g. Stephen King",
            ref:"name"
        },
        {
            title:"Email Address",
            placeHolder:"e.g. stephenking@lorem.com",
            ref:"email"
        },
        {
            title:"Phone Number",
            placeHolder:"e.g. +1 234 567 890",
            ref:"number"
        }
    ];

    const handleValue=((ele,title)=>{
        if(title=="Name")
        {
            props.setformData({...(props.formData),name:ele.target.value})
        }
        else if(title=="Email Address")
        {
            props.setformData({...(props.formData),email:ele.target.value})
        }
        else if(title=="Phone Number")
        {
            props.setformData({...(props.formData),number:ele.target.value})
        }
    })
// props.setStep("STEP 1")
  return (
    <div className={style.firstPageWholeContainer}>
        <div className={style.headerContainer}>
            <h1>
                Personal info
            </h1>
            <p>
                Please provide your name, email address, and phone number.
            </p>
        </div>
        <div className={style.inputContainer}>
            {
                inputArr.map((ele)=>{
                    return(
                    <>
                        <label>{ele.title}</label>
                        <input type={"text"} defaultValue={ele.title=="Name"&&props.formData.name!=""?props.formData.name:ele.title=="Email Address"&&props.formData.email!=""?props.formData.email:ele.title=="Phone Number"&&props.formData.number!=""?props.formData.number:null} placeholder={ele.placeHolder} onChange={(e)=>{handleValue(e,ele.title)}} autoFocus={ele.title=="Name"?true:false}/>
                    </>
                    )
                })
            }
        </div>
    </div>
  )
}
