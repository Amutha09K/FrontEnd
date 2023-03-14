
import { useState,useEffect } from 'react';
import style from './App.module.css';
import Main from './Component/Main/Main';
import records from './Sample.json';

function App() {
const [mainData,setmainData]=useState(localStorage.getItem("records")?JSON.parse(localStorage.getItem("records")):null);
const [sendComment,setsendComment]=useState(false);
const [commentsDetails,setcommentsDetails]=useState({
commentSendBtnClicked:false,
content:"",
date:"now",
commentSendBtnClicked:false,
ReplyBoxEleDetails:"",
deleteBtnClicked:false,
editBtnClicked:false,
deleterOrEditedComponent:"",
updateBtnClicked:false,
oldComment:"",
commentType:"",
commentBox:""
})

useEffect(() => {
  if(commentsDetails.commentSendBtnClicked==true)
  {
    console.log(mainData.comments.length)
    mainData.comments.push({
      id:mainData.comments.length+1,
      content:commentsDetails.content,
      createdAt:commentsDetails.date,
      score:0,
      user:{
        "image": { 
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      replies:[]
    });
    console.log("mainData.comments.length : ",mainData.comments.length)
    stopCommentRequestUseEffect();
  }
}, [commentsDetails.commentSendBtnClicked])


useEffect(() => {
  if(commentsDetails.replySendBtnClicked==true)
  {
    let userName=commentsDetails.ReplyBoxEleDetails.target.parentElement.parentElement.previousElementSibling.children[1].children[0].children[1].innerText;
    let id=commentsDetails.ReplyBoxEleDetails.target.parentElement.parentElement.previousElementSibling.id;
    let boxReplyType=commentsDetails.ReplyBoxEleDetails.target.parentElement.parentElement.previousElementSibling.attributes.type.value;
    if(boxReplyType=="comment")
    {
        let index=mainData.comments.findIndex((comments)=>comments.id==id);
        // console.log("index : ",index);
        mainData.comments[index].replies.push({
            id: mainData.comments[index].replies.length,
            content: commentsDetails.content,
            createdAt: "now",
            score: 4,
            replyingTo: userName,
            user: {
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            },
          })
          localStorage.setItem("records",JSON.stringify(mainData))
    }
    else if(boxReplyType=="reply"){
      let userName=commentsDetails.ReplyBoxEleDetails.target.parentElement.parentElement.previousElementSibling.children[1].children[0].children[1].innerText;
      let id=commentsDetails.ReplyBoxEleDetails.target.parentElement.parentElement.previousElementSibling.id;
      let boxReplyType=commentsDetails.ReplyBoxEleDetails.target.parentElement.parentElement.previousElementSibling.attributes.type.value;
      console.log("id : ",id);
      if(boxReplyType=="reply")
      {
          let commentId=id.split(" ");
          let index=mainData.comments.findIndex((comments)=>comments.id==commentId[1]);
          console.log("index : ",index);
          mainData.comments[index].replies.push({
              id: mainData.comments[index].replies.length,
              content: commentsDetails.content,
              createdAt: "now",
              score: 4,
              replyingTo: userName,
              user: {
                "image": { 
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo"
              },
            })
            localStorage.setItem("records",JSON.stringify(mainData))
      }
    }
    stopCommentRequestUseEffect();
  }
}, [commentsDetails.replySendBtnClicked])

useEffect(()=>{
  if(commentsDetails.deleteBtnClicked==true)
  {
    console.log(commentsDetails.deleterOrEditedComponent)
    if(commentsDetails.deleterOrEditedComponent.type="reply")
    {
      let cmtIndex=mainData.comments.findIndex((comments)=>comments.id==commentsDetails.deleterOrEditedComponent.commentId)
      let replyIndex=mainData.comments[cmtIndex].replies.findIndex((reply)=>reply.id==commentsDetails.deleterOrEditedComponent.replyId)
      mainData.comments[cmtIndex].replies.splice(replyIndex,1)
      console.log(mainData.comments[cmtIndex].replies)
    }
  }
  stopCommentRequestUseEffect();
},[commentsDetails.deleteBtnClicked])

const stopCommentRequestUseEffect=(()=>{

  setcommentsDetails({...(commentsDetails),commentSendBtnClicked:false,content:"",replySendBtnClicked:false,ReplyBoxEleDetails:"",deleteBtnClicked:false,editBtnClicked:false,deleterOrEditedComponent:""})
})

  if(!localStorage.getItem(records)){
    localStorage.setItem("records",JSON.stringify(records))
    // localStorage.setItem("records",JSON.stringify({
    //   "currentUser": {
    //     "image": { 
    //       "png": "./images/avatars/image-juliusomo.png",
    //       "webp": "./images/avatars/image-juliusomo.webp"
    //     },
    //     "username": "juliusomo"
    //   },
    //   "comments": []
    // }))
  }

  return (
    <div className={style.wholeContainer}>
      <Main mainData={mainData} commentsDetails={commentsDetails} setcommentsDetails={setcommentsDetails}/>
    </div>
  );
}

export default App;
