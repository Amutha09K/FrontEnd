import React from 'react'
import style from './Final.module.css'

export default function Final() {
  return (
    <div className={style.finalContainer}>
        <img src={"./images/icon-thank-you.svg"}/>
        <h1>
        Thank you!
        </h1>
        <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
    </div>
  )
}
