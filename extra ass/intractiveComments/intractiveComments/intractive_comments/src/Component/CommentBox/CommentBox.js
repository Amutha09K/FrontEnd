import React, { useRef } from 'react'
import style from './CommentBox.module.css'
import Profile from '../Profile/Profile'

export default function CommentBox(props) {
    const textBox=useRef();

    const commentSendRequest=(()=>{
        if(textBox.current.value!="")
        {
            props.setcommentsDetails({...(props.commentsDetails),commentSendBtnClicked:true,content:textBox.current.value})
            textBox.current.value=""
        }
    })


    const commentReplyRequest=((ele)=>{
        if(textBox.current.value!="")
        {
            ele.target.parentElement.parentElement.style.display="none"
                props.setcommentsDetails({...(props.commentsDetails),replySendBtnClicked:true,content:textBox.current.value,ReplyBoxEleDetails:ele})
                textBox.current.value=""
        }
    })

    const updateRequest=(()=>{
        console.log("Hello......")
    })

    const updateCommentSendRequest=(()=>{
        
    })


    const UpdateCommentReplyRequest=(()=>{
        
    })


  return (
    // props.commentBox==""?
    <section className={style.CommentBoxContainer}>
    <div className={style.profContainer}>
        <Profile imgUrl={props.imgUrl}/>
    </div>
    <textarea placeholder={"Add a Comment...."} ref={textBox} style={props.type=="reply"?{width:"none"}:{display:"inline-block"}} autoFocus={true}>

    </textarea>
    <button onClick={props.CommentBox=="static"?updateRequest:props.type=="comment"?commentSendRequest:props.type=="commentBoxReply"?(ele)=>commentReplyRequest(ele):null}>
      {props.CommentBox=="static"?"Update":props.type=="commentBoxReply"?"Reply":"Send"}
    </button>
  </section>
//   :props.commentBox=="static"?
//   <section className={style.CommentBoxContainer}>
//     <div className={style.profContainer}>
//         <Profile imgUrl={props.imgUrl}/>
//     </div>
//     <textarea placeholder={"Add a Comment...."} ref={textBox} style={props.type=="reply"?{width:"none"}:{display:"inline-block"}} autoFocus={true} defaultValue={props.commentBox=="static"?props.commentsDetails.oldComment:""}>

//     </textarea>
//     <button onClick={props.type=="comment" && props.commentBox!="static"?commentSendRequest:props.type=="comment" && props.commentBox=="static"?updateCommentSendRequest:props.type=="commentBoxReply" && props.commentBox=="static"?(ele)=>UpdateCommentReplyRequest(ele):null}>
//     {props.commentBox=="static"?"Update":"Send"}
//     </button>
//   </section>
//   :null
  )
}