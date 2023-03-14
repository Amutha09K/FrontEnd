import React from 'react'
import style from './PricingComponent.module.css'

export default function PricingComponent(props) {
    
    const RequestAccess=(()=>{
        alert("Request Accessed");
    })
  return (
    <div className={style.PricingComp}>
        <h1 className={style.title}>
            {props.title}
        </h1>
        <p>
            {props.textP}
        </p>
        <h1 className={style.amount}>
            {props.amount}
        </h1>
        <hr/>
        <ul>
            {
                props.checked?props.checked.map((ele)=>{
                    return(
                    <li className={style.liChecked}>
                        {ele}
                    </li>)
                }):null
            }
            {
                props.unChecked?props.unChecked.map((ele)=>{
                    return(
                    <li className={style.liUnChecked}>
                        {ele}
                    </li>)
                }):null
            }
        </ul>
        <hr className={style.bottomHr}/>
        <button onclick={RequestAccess}>Request Access</button>
    </div>
  )
}
