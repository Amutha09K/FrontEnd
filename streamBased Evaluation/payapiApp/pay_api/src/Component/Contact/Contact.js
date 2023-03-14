import React, { useRef } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Product from '../Product/Product'
import style from './Contact.module.css'

export default function Contact() {
    const name=useRef();
    const email=useRef();
    const compName=useRef();
    const title=useRef();
    const msg=useRef();
    const chkBox=useRef();
    const alertP=useRef();
    let refArr=[name,email,compName,title,msg];

    const handleFormData=(()=>{
        const emailValidation=/@.*\.com$/.test(email.current.value)
        console.log(name.current.value!="" && !name.current.value.includes("number") && email.current.value!="" && !email.current.value.includes(" ")&& emailValidation && compName.current.value!="" && compName.current.value!="" )//&& title.current.value!="" && chkBox.current.checked!=false)
        if(name.current.value.trim()!="" && !name.current.value.includes("number") && email.current.value!="" && !email.current.value.includes(" ") && /@.*\.com$/.test(email.current.value) && compName.current.value!="" && compName.current.value!=""&& title.current.value!="" && chkBox.current.checked!=false)
        {
            refArr.map((ele)=>{
                // ele.current.className="";
                // ele.current.value="";
                })
                // chkBox.current.checked=false;
                alertP.current.style.display="none"
                // chkBox.current.className=""
                // alert("Your Request Accessed")
        }
        else
        {
            refArr.map((ele)=>{
                if(ele.current.value=="")
                {
                    ele.current.className=(style.validationBox)
                }
                else
                {
                    // console.log(email.current.value.includes(" "))
                    // console.log()
                    if(email.current.value.includes(" ") || !(/@.*\.com$/.test(email.current.value)))
                    {
                        email.current.className=(style.validationBox)
                    }
                    else{
                        ele.current.className=""
                    }
                    ele.current.className=""
                }
            })
            if(chkBox.current.checked!=true)
            {
                chkBox.current.className=(style.chkBoxAnimation)
            }
            else
            {
                chkBox.current.className=""
            }
            alertP.current.style.display="inline-block"
        }
    })
  return (
    <div>
        <Header/>
        <img src={'./images/bg-pattern-circle.svg'} className={style.headerCircleImg}/>
        <div className={style.contactContainer}>
            <h1 className={style.title}>
            Submit a help request and 
we’ll get in touch shortly.
            </h1>
            <div className={style.formProductContainer}>
                <div className={style.form}>
                    <div>
                        <input type={"text"} placeholder={"Name"} ref={name}/>
                    </div>
                    <div>
                        <input type={"email"} placeholder={"Email Address"} ref={email}/>
                    </div>
                    <div>
                        <input type={"text"} placeholder={"Company Name"} ref={compName}/>
                    </div>
                    <div>
                        <input type={"text"} placeholder={"Title"} ref={title}/>
                    </div>
                    <div>
                        <textarea placeholder={"Message"} style={{ marginTop : '2vh', paddingBottom: '2.9vh' }} ref={msg}></textarea>
                    </div>
                    <div className={style.chkBox}>
                        <input type={"checkbox"} ref={chkBox}/>
                        <p>Stay up-to-date with company announcements and updates to our API</p>
                    </div>
                    <button onClick={handleFormData}>Request Access</button>
                    <p className={style.alert} ref={alertP}>Please fill All text boxes</p>
                </div>
                <div className={style.productContainer}>
                    <h2>
                    Join the thousands of innovators already building with us
                    </h2>
                    <Product/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
