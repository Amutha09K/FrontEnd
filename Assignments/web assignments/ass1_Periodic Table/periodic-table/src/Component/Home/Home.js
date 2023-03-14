import React from 'react'
import "./Home.css"
import Element from '../Element/Element'

export default function Home() {
    
  return (
    <div class="whole-container">
        <h1>Periodic Table Of Elements</h1>
        <div>
            {
                bgArr.map((ele)=>
                {
                   return <Element/>
                })
            }
        </div>
    </div>
  )
}
