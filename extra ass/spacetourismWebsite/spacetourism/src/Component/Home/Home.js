import React from 'react'
import Header from '../Header/Header'
import style from './Home.module.css'

export default function Home(props) {
  return (
    <div className={style.homeWholeContainer}>
        <Header page={"home"}  setpageRendering={props.setpageRendering}/>
        <div className={style.homeContentContainer}>
            <div className={style.contents}>
                <pre>
                SO, YOU WANT TO TRAVEL TO
                </pre>
                <h1>
                SPACE
                </h1>
                <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
        <div className={style.explore}>
            <section>
                <h3>EXPLORE</h3>
            </section>
        </div>
        </div>
    </div>
  )
}
