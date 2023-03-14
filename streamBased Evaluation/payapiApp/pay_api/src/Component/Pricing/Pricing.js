import React from 'react'
import style from './Pricing.module.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import PricingComponent from '../PricingComponent/PricingComponent'

export default function Pricing() {
  return (
    <div>
        <Header/>
        <img src={'./images/bg-pattern-circle.svg'} className={style.headerCircleImg}/>
        
        <div className={style.pricingContainer}>
            <h1>
            Pricing
            </h1>
            <div className={style.pricingCompContainer}>
                <PricingComponent title={"Free Plan"} textP={"Build and test using our core set of products with up to 100 API requests "} amount={"$0.00"} checked={["Transactions","Auth","Identity"]} unChecked={["Investments","Assets","Liabilities","Income"]}/>
                <PricingComponent title={"Basic Plan"} textP={"Launch your project with unlimited requests and no contractual minimums "} amount={"$249.00"} checked={["Transactions","Auth","Identity","Investments","Assets"]} unChecked={["Liabilities","Income"]}/>
                <PricingComponent title={"Premium Plan"} textP={"Get tailored solutions, volume pricing, and dedicated support for your team "} amount={"$499.00"} checked={["Transactions","Auth","Identity","Investments","Assets","Liabilities","Income"]}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
