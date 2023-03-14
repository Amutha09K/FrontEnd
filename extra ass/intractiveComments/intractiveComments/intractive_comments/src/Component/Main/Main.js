import React, { Profiler } from 'react'
import CommentBox from '../CommentBox/CommentBox'
import Comments from '../Comments/Comments'
import Profile from '../Profile/Profile'
import style from './Main.module.css'

export default function Main(props) {
  return (
    <div className={style.mainWholeContainer}>
      <div className={style.commentContainer}>
        {
          props.mainData.comments.length!=0?
          props.mainData.comments.map((comments)=>{
            return (
              <>
              {/* <div> */}
              <Comments margin={"0vw"} type={"comment"} commentId={""} id={comments.id} mainData={props.mainData} commentBox={""} username={comments.user.username} createdAt={comments.createdAt} score={comments.score} content={comments.content} imgUrl={comments.user.image.webp}  commentsDetails={props.commentsDetails} setcommentsDetails={props.setcommentsDetails}/>
              {
                comments.replies.length!=0?
                <div className={style.repliesContainer}>
                {
                  comments.replies.map((replies)=>{
                    return (
                      <>
                        <Comments margin={"3vw"} type={"reply"} id={replies.id+" "+comments.id} commentBox={""}  mainData={props.mainData} commentedUser={replies.replyingTo} username={replies.user.username} createdAt={replies.createdAt} score={replies.score} content={replies.content} imgUrl={replies.user.image.webp}  commentsDetails={props.commentsDetails} setcommentsDetails={props.setcommentsDetails}/>
                      </>
                      )
                  })
                }
                </div>
                :null
              }
              {/* </div> */}
              </>
            )
          })  
          :null
        }
    </div>
      <CommentBox mainData={props.mainData} imgUrl={props.mainData.currentUser.image.webp} commentBox={""} commentsDetails={props.commentsDetails} setcommentsDetails={props.setcommentsDetails} type={"comment"}/>
      {/* <CommentBox mainData={props.mainData} imgUrl={'./images'}/> */}
    </div>
  )
}
