import React from 'react'
import CommentBox from '../CommentBox/CommentBox'
import Profile from '../Profile/Profile'
import style from './Comments.module.css'

export default function Comments(props) {
    // console.log(props.mainData)

    const displayCommentBox=((ele)=>{
        const display=ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display
        if(display=="none")
        {
            ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display="inline-block";
        }
        else
        {
            ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display="none";
        }
    })

    const deleteBtnClicked=((ele)=>{
        let replyId=ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.id.split(" ")
        const eleDetails={
            userName:ele.target.parentElement.parentElement.parentElement.children[1].innerText,
            replyId:replyId[0],
            commentId:replyId[1],
            type:ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.attributes.type.value
        }
        props.setcommentsDetails({...(props.commentsDetails),deleteBtnClicked:true,deleterOrEditedComponent:eleDetails})
    })

    const editBtnClicked=((ele)=>{
        const eleDetails={
            userName:ele.target.parentElement.parentElement.parentElement.children[1].innerText,
            id:ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.id,

        }
        const display=ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display
        if(display=="none")
        {
            ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display="inline-block";
        }
        else
        {
            ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display="none";
        }
        console.log()
        props.setcommentsDetails({...(props.commentsDetails),editBtnClicked:true,deleterOrEditedComponent:eleDetails,updateBtnClicked:true,oldComment:ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[1].innerText,commentType:"updateComment"})
    })

  return (
    <>
    <div className={style.commentWholecontainer} id={props.id} type={props.type} style={{marginLeft:props.margin}}>
        <div className={style.votes}>

        </div>
        <section className={style.comments}>
            <div className={style.commentTop}>
                    <Profile imgUrl={props.imgUrl}/>
                <span className={style.userName}>{props.username}</span>
                <span className={style.DayOfComment}>
                {
                   props.createdAt
                }
                </span>
                <span className={style.commentReply}>
                {/* <svg className={style.replySvg} backgroundColor="#3e30b3" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-8l-14 14 14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z"/><path d="M0 0h48v48h-48z" fill="none"/></svg> */}
                    {/* <span className={style.replySvg} >&#x27A5;</span> */}
                    <span className={style.replyTxt}>
                        {
                            props.type=="comment" || props.type=="reply" && props.username!=props.mainData.currentUser.username?
                                <span onClick={(ele)=>displayCommentBox(ele)}>Reply</span>
                            :
                            <>
                            <span onClick={(ele)=>deleteBtnClicked(ele)}>Delete</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span onClick={(ele)=>editBtnClicked(ele)}>Edit</span>
                            </>
                            // (ele)=>displayCommentBox(ele)
                        }
                    </span>
                </span>
            </div>
            <p> {
                props.type=="reply"?
                <>
                
                    <span className={style.mentionedName}>@{props.commentedUser}&nbsp;&nbsp;</span>
                    <span>{props.content}</span>
                
                </>
                :props.content
            }</p>
        </section>
    </div>
        {
             props.type=="comment" || props.type=="reply" && props.username!=props.mainData.currentUser.username?
                <div style={{display:"none"}} className={props.type=="reply"?style.commentBox+" "+style.replyCommentBox:style.commentBox} >
                    <CommentBox mainData={props.mainData} commentBox={""} imgUrl={props.mainData.currentUser.image.webp} commentsDetails={props.commentsDetails} setcommentsDetails={props.setcommentsDetails} type={"commentBoxReply"}/>
                </div>
            :props.type=="comment" || props.type=="reply" && props.username==props.mainData.currentUser.username ?
            <div style={{display:"none"}} className={props.type=="reply"?style.commentBox+" "+style.replyCommentBox:style.commentBox} >
                <CommentBox mainData={props.mainData} commentBox={"static"} imgUrl={props.mainData.currentUser.image.webp} commentsDetails={props.commentsDetails} setcommentsDetails={props.setcommentsDetails} type={"commentBoxReply"}/>
            </div>
            :null
        }
        </>
  )
}
