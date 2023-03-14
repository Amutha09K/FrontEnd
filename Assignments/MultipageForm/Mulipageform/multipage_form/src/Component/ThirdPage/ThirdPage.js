import React, { useContext, useState } from 'react'
import { userContext } from '../../App'
import style from './ThirdPage.module.css'

export default function ThirdPage(props) {

    // useContext
    const formData=useContext(userContext);
    const setformData=useContext(userContext);

    const [boxClicked,setboxClicked]=useState() 
    const addOnsArr=[
        {
            title:"Online service",
            subTitle:"Access to multiplayer games",
            amount:"1"
        },
        {
            title:"Larger storage",
            subTitle:"Extra 1TB of cloud save",
            amount:"2"
        },
        {
            title:"Customizable profile",
            subTitle:"Custom theme on your profile",
            amount:"2"
        }
    ]
    const titleArr=[], amountArr=[];
const handleClicked=((ele,title,amount)=>{

console.log("amount : ",amount)
    if(ele.target.checked==true)
    {
        if(title=="Online service")
        {
            props.setformData({...(props.formData),addonOnlineService:"true",addOnsAmount:Number(props.formData.addOnsAmount)+Number(amount)})
        }
        if(title=="Larger storage")
        {
            props.setformData({...(props.formData),addOnLargerStorage:"true",addOnsAmount:Number(props.formData.addOnsAmount)+Number(amount)})
        }
        if(title=="Customizable profile")
        {
            props.setformData({...(props.formData),addOnCustomizedProfile:"true",addOnsAmount:Number(props.formData.addOnsAmount)+Number(amount)})
        }
                    amountArr.push(amount)
                                // props.setformData({...(props.formData),addOnsAmount:Number(props.formData.addOnsAmount)+Number(amount)})
    }
    else if(ele.target.checked==false)
    {
        if(title=="Online service")
        {
            props.setformData({...(props.formData),addonOnlineService:"false",addOnsAmount:Number(props.formData.addOnsAmount)-Number(amount)})
        }
        if(title=="Larger storage")
        {
            props.setformData({...(props.formData),addOnLargerStorage:"false",addOnsAmount:Number(props.formData.addOnsAmount)-Number(amount)})
        }
        if(title=="Customizable profile")
        {
            props.setformData({...(props.formData),addOnCustomizedProfile:"false",addOnsAmount:Number(props.formData.addOnsAmount)-Number(amount)})
        }
    }
})

  return (
    <div className={style.thirdPageWholeContainer}>
        <div className={style.headerContainer}>
            <h1>
            Pick add-ons
            </h1>
            <p>
            Add-ons help enhance your gaming experience.
            </p>
        </div>
        <div className={style.inputContainer}>
            {
                
                addOnsArr.map((ele)=>{
                    return(
                    <>
                        <div className={boxClicked=="true"?style.box+" "+style.boxClicked:style.box}>
                            <input type={"checkbox"} defaultChecked={props.formData.addonOnlineService=="true" && ele.title=="Online service"?true:props.formData.addOnLargerStorage=="true" && ele.title=="Larger storage"?true:props.formData.addOnCustomizedProfile=="true" && ele.title=="Customizable profile"?true:false} onClick={(el)=>{handleClicked(el,ele.title,props.formData.yearly=="choosed"?Number(ele.amount)*10:ele.amount)}}/>
                            <div className={style.titleContainer}>
                                <p>{ele.title}</p>
                                <pre>{ele.subTitle}</pre>
                            </div>
                            <p>
                            {props.formData.yearly=="choosed"?"$"+Number(ele.amount)*10+"/yr":"$"+ele.amount+"/mo"}
                            </p>
                        </div>    
                    </>
                    )
                })
            }
        </div>
    </div>
  )
}
