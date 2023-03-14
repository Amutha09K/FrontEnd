import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../../App'
import style from './SecPage.module.css'

export default function SecPage(props) {

    // useContext
    const formData=useContext(userContext);
    const setformData=useContext(userContext);

    const [boxClicked,setboxClicked]=useState(props.formData.yourPlan!=""?"true":"false");
    const [box,setbox]=useState(props.formData.yourPlan!=""?props.formData.yourPlan:"");

    const planMonthArr=[
        {
            image:"./images/icon-arcade.svg",
            title:"Arcade",
            amount:"9"
        },
        {
            image:"./images/icon-advanced.svg",
            title:"Advanced",
            amount:"12"
        },
        {
            image:"./images/icon-pro.svg",
            title:"Pro",
            amount:"15"
        },
    ]

    useEffect(()=>{

    },[boxClicked])

const handleToggle=((ele)=>{
    if(ele.target.checked==false)
    {
        props.setformData({...(props.formData),monthly:"choosed",yearly:""})
    }
    else if(ele.target.checked==true){
    props.setformData({...(props.formData),monthly:"",yearly:"choosed"})
    }
})

const handleClicked=((ele,boxTitle,amount)=>{
    let titleArr=["Arcade","Advanced","Pro"]
    titleArr.forEach((title)=>{
        if(boxTitle==title)
        {
            props.setformData({...(props.formData),yourPlan:boxTitle,planAmount:amount})
            setboxClicked("true");
            setbox(boxTitle)
        }
    })
})
 
  return (
    <div className={style.secPageWholeContainer}>
        <div className={style.headerContainer}>
            <h1>
                Select your plan
            </h1>
            <p>
                You have the option of monthly or yearly billing.
            </p>
        </div>
        <div className={style.inputContainer}>
            <div>
                {
                    planMonthArr.map((ele)=>{
                        const title=ele.title
                        console.log(box)
                            console.log(title)
                        return(
                        <>
                                <div className={boxClicked=="true" && box==title?style.box+" "+style.boxClicked:style.box} onClick={(e)=>{handleClicked(e, ele.title, props.formData.yearly=="choosed"?"$"+Number(ele.amount)*10+"/yr":"$"+ele.amount+"/mo")}}>
                                    <img src={ele.image}/>
                                    <p className={style.title}>{ele.title}</p>
                                    <p className={style.amount}>{props.formData.yearly=="choosed"?"$"+Number(ele.amount)*10+"/yr":"$"+ele.amount+"/mo"}</p>
                                    <pre className={props.formData.yearly=="choosed"?null:style.displayNone}>2 months free</pre>
                                </div>
                        </>
                        )
                    })
                }
            </div>
            <div className={style.toggleContainer}>
            <div className={style.toggle}>
            <p className={style.month}>Monthly</p>
            <div className={style.button}>
            <input type="checkbox" className={style.checkbox} defaultChecked={props.formData.yearly=="choosed"?true:false} onClick={(ele)=>handleToggle(ele)}/> 
            <div className={style.knobs}></div>
            <div className={style.layer}></div>
            </div>
            <p className={style.year}>Yearly</p>
        </div>
            </div>
        </div>
    </div>
  )
}
