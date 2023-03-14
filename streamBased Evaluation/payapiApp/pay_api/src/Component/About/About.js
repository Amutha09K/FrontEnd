import React from 'react'
import AboutContent from '../AboutContent/AboutContent'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './About.module.css'

export default function About() {
  return (
    <div>
        <Header/>
        <img src={'./images/bg-pattern-circle.svg'} className={style.headerCircleImg}/>
        <div className={style.AboutWholeContainer}>
            <h1 className={style.title}>
            We empower innovators
by delivering access to the financial system
            </h1>
            <div className={style.About}>
                <AboutContent title={"Our Vision"} content={"Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "}/>
                <AboutContent title={"Our Business"} content={"At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "}/>
            </div>
            <img src={'./images/bg-pattern-circle.svg'} className={style.CircleImg}/>
            <img src={"./images/image-team-members.jpg"} className={style.teamImg}/>
            <div>
                <div className={style.teamDetailsContainer}>
                    <div>
                        <p>
                        Team Members
                        </p>
                        <h1>
                        300+
                        </h1>
                    </div>
                    <div>
                        <p>
                        Offices in the US
                        </p>
                        <h1>
                        3
                        </h1>
                    </div>
                    <div>
                        <p>
                        Transactions analyzed
                        </p>
                        <h1>
                        10M+
                        </h1>
                    </div>
                </div>
            </div>

            <div className={style.About}>
                <AboutContent title={"Our Vision"} content={"Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "}/>
                <AboutContent title={"Our Business"} content={"At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
