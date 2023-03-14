import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './Login.module.css'

export default function Login(props) {
  const [loginData,setLoginData]=useState({
    signInBtnClicked:"false",
    signIn:"",

    signUp:"",
    signUpBtnClicked:"true",
  })
  const record=JSON.parse(localStorage.getItem("notesApp"))
  let duplicateUserName="";
  const signInFlipBtn=useRef(),signUpFlipBtn=useRef();
  const signInUser=useRef(),signUpUser=useRef();
  const signInPassword=useRef(),signUpPassword=useRef();

  // signUp
  useEffect(()=>{
    if(loginData.signUp=="true" || loginData.signUp=="false")
    {
      userSignUp()
    }
    function userSignUp()
    {
      let userName=signUpUser.current.value,password=signUpPassword.current.value;
      if(record.notesApp!=[])
      {
        record.notesApp.forEach((ele)=>{
          if(ele.currentUser==userName)
          {
            duplicateUserName="alreadyExist"
          }
        })
      }
      const regexUserName = /^(?=.*[a-zA-Z]{2,3})[^\s]{1,}[^-\s]{4,}$/g;
      const regexPassword =/^(?=.*[a-zA-Z]{1,2})[^\s]{1,}[^-\s]{5,}$/g;
      if(duplicateUserName!="alreadyExist" && userName!=password && regexUserName.test(userName) && regexPassword.test(password))
      {
        record.notesApp.push({
          currentUser:userName,
          userPassword:password,
          Notebook:[]
        })
        console.log(record)
        localStorage.setItem("notesApp",JSON.stringify(record))
        console.log(userName +" : "+ password)
        signUpUser.current.value="";
        signUpPassword.current.value="";
        flipDiv()
        // props.setForm({...(props.Form),formDisplay:"display",formType:"alreadyExist"})
      }
      else if(duplicateUserName=="alreadyExist")
      {
        props.setForm({...(props.Form),formDisplay:"display",formType:"alreadyExist"})
        duplicateUserName=""
      }
      else
      {
        props.setForm({...(props.Form),formDisplay:"display",formType:"signUpUserName"})
      }
    }
  },[loginData.signUp])

  // signIn
  useEffect(()=>{
    if(loginData.signIn=="true" || loginData.signIn=="false")
    {
      userSignIn()
    }
    function userSignIn()
    {
      let userName=signInUser.current.value,password=signInPassword.current.value;
      record.notesApp.length>0? record.notesApp.map((obj)=>
      {
        const data=record.notesApp.findIndex(name => name.currentUser === userName &&name.userPassword === password )
        if(data!=(-1))
        {
          if(obj.currentUser==userName && obj.userPassword==password)
          {
            props.setgotoHome({...(props.gotoHome), gotoHomeBtnClicked:"true"})
            props.setnotesUsageData({...(props.notesUsageData), currentUser:userName,currentPage:"Notebooks"})
            props.setmainData(JSON.parse(localStorage.getItem("notesApp")))
          }
        }
        else 
        {
          props.setForm({...(props.Form),formDisplay:"display",formType:"signInWrong"})
        }
      }):props.setForm({...(props.Form),formDisplay:"display",formType:"signInWrong"});
      flipDiv()
    }
  },[loginData.signIn])

  const flipDiv=(()=>{
    if(loginData.signUpBtnClicked=="false"){
      setLoginData({...(loginData),signUpBtnClicked:"true",signInBtnClicked:"false"})
    }
    else if(loginData.signUpBtnClicked=="true"){
      setLoginData({...(loginData),signUpBtnClicked:"false",signInBtnClicked:"true"})
    }
  })

  // signin
  const signUp=(()=>{
    loginData.signUp=="false" || loginData.signUp==""?setLoginData({...(loginData),signUp:"true"}):setLoginData({...(loginData),signUp:"false"})
  })

  // signup
  const signIn=(()=>{
    loginData.signIn=="false" || loginData.signIn==""?setLoginData({...(loginData),signIn:"true"}):setLoginData({...(loginData),signIn:"false"})
  })

  return (
    <div className={style.loginPageContainer}>
      <div className={style.layer}>
        <div className={loginData.signInBtnClicked=="true"?style.form+" "+style.flipForm:style.form}>
          <div className={style.formInner}>
            <h1>
              Sign In
            </h1>
            <input type={"text"} placeholder={"UserName"} ref={signInUser} autoFocus/>
            <input type={"password"} placeholder={"Password"} ref={signInPassword}/>
            <input type={"button"} value="Sign In" onClick={signIn}/> 
            <p onClick={flipDiv} ref={signInFlipBtn}>
              Sign Up<span>&nbsp;&nbsp; &#x27A3;</span>
            </p>  
          </div>
          </div>
        <div className={loginData.signUpBtnClicked=="true"?style.form+" "+style.form2+" "+style.flipForm2:style.form+" "+style.form2}>
          <div className={style.formInner}>
            <h1>
              Sign Up
            </h1>
            <input type={"text"} placeholder={"UserName"} ref={signUpUser} autoFocus/>
            <input type={"password"} placeholder={"Password"} ref={signUpPassword}/>
            {/* <Link to={"/NotesApp"}> */}
            <input type={"button"} value="Sign Up" onClick={signUp}/> 
            {/* </Link> */}
            <p onClick={flipDiv} ref={signUpFlipBtn}>
              Sign In<span>&nbsp;&nbsp; &#x27A3;</span>
            </p>  
          </div>
        </div>
      </div>
    </div>
  )
}
