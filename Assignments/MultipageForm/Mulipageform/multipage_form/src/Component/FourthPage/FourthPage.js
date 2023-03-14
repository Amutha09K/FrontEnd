import React, { useContext } from 'react'
import { userContext } from '../../App'
import style from './FourthPage.module.css'

export default function FourthPage(props) {

  return (
    <div className={style.fourthPageWholeContainer}>
        <div className={style.headerContainer}>
            <h1>
            Finishing up
            </h1>
            <p>
            Please provide your name, email address, and phone number.
            </p>
        </div>
        <div className={style.inputContainer}>
            <div className={style.form}>
                <section className={style.amountDetails}>
                    <h2>
                        {props.formData.yourPlan} ({props.formData.monthly=="choosed"?"monthly":"yearly"})
                        <span>
                            {props.formData.planAmount}
                        </span>
                    </h2>
                </section>
                    <hr/>
                    <div className={style.bottomCalc}>
                {props.formData.addonOnlineService=="true"?<h2>Online service<span>{props.formData.monthly=="choosed"?"$1/mo":"$10/yr"}</span></h2>:null}
                {props.formData.addOnLargerStorage=="true"?<h2>Larger storage<span>{props.formData.monthly=="choosed"?"$2/mo":"$20/yr"}</span></h2>:null}
                {props.formData.addOnCustomizedProfile=="true"?<h2>Customizable profile<span>{props.formData.monthly=="choosed"?"$2/mo":"$20/yr"}</span></h2>:null}
                    </div>

                        <h3>
                            Total (per {props.formData.monthly=="choosed"?"month":"year"})
                            <span>+${props.formData.addOnsAmount}/{props.formData.monthly=="choosed"?"mo":"yr"}</span>
                        </h3>
            </div>
        </div>
    </div>
  )
}
