import React from 'react'
import style from './Product.module.css'

export default function Product() {
  return (
    <div className={style.productImgContaiiner}>
    <img src={'/images/tesla.svg'} className={style.img1}/>
        <img src={'/images/microsoft.svg'} className={style.img2}/>
        <img src={'/images/hewlett-packard.svg'} className={style.img3}/>
        <img src={'/images/oracle.svg'} className={style.img4}/>
        <img src={'/images/google.svg'} className={style.img5}/>
        <img src={'/images/nvidia.svg'} className={style.img6}/>
    </div>
  )
}
