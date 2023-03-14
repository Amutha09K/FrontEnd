import React, { useContext } from 'react'
import { userContext } from '../../App'
import style from './Sidebar.module.css'

export default function Sidebar(props) {

    // useContext
    const formData=useContext(userContext);
    const setformData=useContext(userContext);

    const stepsArr=[
        {
            step:"1",
            title:"YOUR INFO"
        },
        {
            step:"2",
            title:"SELECT PLAN"
        },
        {
            step:"3",
            title:"ADD-ONS"
        },
        {
            step:"4",
            title:"SUMMARY"
        },
]
  return (
    <div className={style.sidebarContainer}>
    <div className={style.stepsContainer}>
        {
            stepsArr.map((ele)=>{
                return (
                    <>
                        <div className={props.step==`STEP ${Number(ele.step)-1}`?style.circle+" "+style.circleSelected:style.circle}>
                            {ele.step}
                        </div>
                        <div className={style.content}>
                            <pre>
                                STEP {ele.step}
                            </pre>
                            <p>
                                {ele.title}
                            </p>
                        </div>
                    </>
                )
            })
        }
    </div>
    </div>
  )
}
