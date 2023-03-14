import { Routes, Route, Link } from 'react-router-dom';
import style from './App.module.css';
import { createContext, useEffect, useState } from 'react';
import FirstPage from './Component/FirstPage/FirstPage';
import SecPage from './Component/SecPage/SecPage';
import ThirdPage from './Component/ThirdPage/ThirdPage';
import FourthPage from './Component/FourthPage/FourthPage';
import Sidebar from './Component/Sidebar/Sidebar';
import { useContext } from 'react';
import Final from './Component/Final/Final';

export const userContext=createContext(null)
function App() {
  const [step,setStep]=useState("STEP 0");
  const [temp,settemp]=useState(true)
  const [validation,setvalidation]=useState("");
  const [formData,setformData]=useState(
    {
      name:"",
      email:"",
      number:"",
      yearly:"",
      monthly:"choosed",
      yourPlan:"Arcade",
      planAmount:"$9/mo",
      addonOnlineService:"",
      addOnLargerStorage:"",
      addOnCustomizedProfile:"",
      addOnsTitle:0,
      addOnsAmount:0
    }
  )
useEffect(()=>{
  setStep("STEP 0")
},[null])
useEffect(()=>{
},[temp])

  const print=(()=>{

    console.log(formData.addonOnlineService)
    console.log(formData.addOnLargerStorage)
    console.log(formData.addOnCustomizedProfile)

  })
  const dataValidation=(()=>{
    if(step=="STEP 0")
  {    
  const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const number = /^[0-9]+$/.test(formData.number);

    if(formData.name!="" && formData.email!="" && formData.number!="" && email && number)
    {
      if("STEP 0")
      {
        setStep("STEP 1")
      }
    }
    else{
      alert("incorrect form fill up")
      setStep("STEP 0")
    }
  }
  else{
    if(step=="STEP 1")
    {
      console.log("HIIii   1")
      setStep("STEP 2")
    }
    else if(step=="STEP 2")
    {
      console.log("HIIii   2")
      setStep("STEP 3")
    }
    else if(step=="STEP 3")
    {
      console.log("HIIii   3")
      setStep("STEP 4")
    }
  }
  console.log("step : "+step)
  })

  const goBack=(()=>{
    if(step=="STEP 1")
    {
      setStep("STEP 0")
    }
    else if(step=="STEP 2")
    {
      setStep("STEP 1")
    }
    else if(step=="STEP 3")
    {
      setStep("STEP 2")
    }
    else if(step=="STEP 4")
    {
      setStep("STEP 3")
    }
  })

  return (
    <div className={style.wholeContainer} onClick={print}>
        <Sidebar step={step} setStep={setStep}/>
        <div className={style.contentSection}>
        {
              step=="STEP 0"?<FirstPage step={step} setStep={setStep} formData={formData} setformData={setformData}/>
              :
              step=="STEP 1"?<SecPage step={step} setStep={setStep} formData={formData} setformData={setformData}/> 
              :
              step=="STEP 2"?<ThirdPage step={step} setStep={setStep} formData={formData} setformData={setformData} temp={temp} settemp={settemp}/>
              :
              step=="STEP 3"? <FourthPage step={step} setStep={setStep} formData={formData} setformData={setformData}/>
              :
              step=="STEP 4"? <Final step={step} setStep={setStep} formData={formData} setformData={setformData}/> 
              :null
        }
        <div className={style.footer}>
          <div>
            <button onClick={goBack} className={step=="STEP 0" || step=="STEP 4"?style.displayNone:null}>
              Go Back
            </button>
            </div>
          <div>
            <button onClick={dataValidation} className={step=="STEP 4"?style.displayNone+" "+style.nextStep:style.nextStep}>
              {step=="STEP 3"?"Confirm":"Next Step"}
            </button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;