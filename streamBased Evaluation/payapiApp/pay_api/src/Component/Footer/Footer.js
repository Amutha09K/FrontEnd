import React from 'react'
import EmailInput from '../EmailInput/EmailInput'
import Header from '../Header/Header'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div>
        <div className={style.footerTop}>
            <h1>
                Ready to start?
            </h1>
            <div className={style.EmailInput}>
                <EmailInput/>
            </div>
        </div>
        <div className={style.footerBottom}>
            <div className={style.footersHeader}>
            <Header/>
            </div>
            <div className={style.mediaImgContainer}>
                <img src={'./images/facebook.svg'}/>
                <img src={'./images/twitter.svg'}/>
                <img src={'./images/linkedin.svg'}/>
            </div>
        </div>
    </div>
  )
}
