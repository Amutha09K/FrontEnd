import React,{ useRef } from 'react'
import style from './EmailInput.module.css'
// import  from 'react'

export default function EmailInput() {
    const email=useRef();
    const EmailValidation=(()=>{
        
        if(email.current.value!="" && !email.current.value.includes(" ") && email.current.value.includes("@gmail.com"))
        {
            localStorage.setItem("popup",email.current.value)
            alert("Your Mail Accessed")
            email.current.value="";
            email.current.style.borderBottom="";
            email.current.style.boxShadow="";
        }
        else{
            email.current.style.borderBottom="2px solid #ff9090 !important";
            email.current.style.boxShadow="0px 0px 20px -9px red";
        }
 
       })
  return (
    <div className={style.EmailInput}>
        <input type={"text"} className={style.EmailInputTxt} placeholder={"Enter email address"} ref={email}/>
        <input type={"Button"} onClick={EmailValidation} value={"Schedule a Demo"}/>
    </div>
  )
}
