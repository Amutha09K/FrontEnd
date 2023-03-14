import React from 'react'
import style from './Profile.module.css'

export default function Profile(props) {
  return (
    <div className={style.profileContainer} style={{backgroundImage:`url(${props.imgUrl})`}}>
        
    </div>
  )
}
