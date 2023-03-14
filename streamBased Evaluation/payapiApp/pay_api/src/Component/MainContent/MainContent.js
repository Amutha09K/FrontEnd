import React from 'react'
import EmailInput from '../EmailInput/EmailInput'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Product from '../Product/Product'
import style from './MainContent.module.css'
import { Link } from 'react-router-dom'

export default function MainContent() {
  return (
    <div>
        <Header/>
        <img src={'./images/bg-pattern-circle.svg'} className={style.headerCircleImg}/>
        
        <div className={style.homeSection1}>
            <div className={style.sec1TxtContainer}>
                <h1>
                Start building with our APIs for absolutely free.
                </h1>
                <EmailInput/>
                <p>Have any questions? <Link to="/Contact"><span>Contact Us</span></Link></p>
            </div>
            <img src={'./images/illustration-phone-mockup.svg'} className={style.sec1Mobile}/>
        </div>

        <div className={style.homeSection2}>
            <div className={style.sec2TxtContainer}>
                <h1>
                Who we work with
                </h1>
                <p>
                Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. 
                </p>
                <Link to="/About">
                <button>About Us</button>
                </Link>
            </div>
            <div className={style.sec2ProductImgContainer}>
                <Product/>
            </div>
        </div>

        <div className={style.homeSection3}>
            <img src={'./images/illustration-easy-to-implement.svg'}/>
            <div className={style.hoeSection3TxtContainer}>
                <h1>
                Easy to implement
                </h1>
                <p>
                Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
                </p>
            </div>
        </div>


        <div className={style.homeSection4}>
            <div className={style.hoeSection4TxtContainer}>
                <h1>
                Simple UI & UX
                </h1>
                <p>
                Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. 
                </p>
            </div>
            <img src={'./images/illustration-simple-ui.svg'}/>
        </div>

        <div className={style.homeSection5}>
            <div className={style.personalFinance}>
                <img src={'./images/icon-personal-finances.svg'}/>
                <h2>
                Personal Finances
                </h2>
                <p>
                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. 
                </p>
            </div>
            <div className={style.Banking}>
                <img src={'./images/icon-banking-and-coverage.svg'}/>
                <h2>
                Personal Finances
                </h2>
                <p>
                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. 
                </p>
            </div>
            <div className={style.Payments}>
                <img src={'./images/icon-consumer-payments.svg'}/>
                <h2>
                Personal Finances
                </h2>
                <p>
                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. 
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
