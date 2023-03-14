import React from 'react'
import style from './AboutContent.module.css'

export default function AboutContent(props) {
  return (
    <div className={style.AboutContentContainer}>
        <div className={style.AboutContentContainer2}>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
        </div>
    </div>
  )
}
