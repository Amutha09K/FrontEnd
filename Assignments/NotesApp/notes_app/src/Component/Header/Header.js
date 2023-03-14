import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { userContext } from '../../App'
import style from './Header.module.css'

export default function Header(props) {
    // useContext Hook
    const passingData=useContext(userContext);
    const setpassingData=useContext(userContext);
    const [searchDataArr,setsearchDataArr]=useState(null);
    const [hideSuggession,sethideSuggession]=useState(false);
    const searchBox=useRef();

    useEffect(()=>{
        if(hideSuggession==true){
            console.log(hideSuggession)
            props.setnotesUsageData({...(props.notesUsageData),searchBoxFocused:false})
        }
        
    },[hideSuggession])
    
    const createNoteBookBtnClicked=(()=>{

        props.setForm({...(props.Form),formDisplay:"display",formType:"createNoteBookForm",editing:""})
    })
    const createNoteBtnClicked=(()=>{
        // props.setForm({...(props.Form),formDisplay:"display",formType:"createNotesForm",editing:""})
        props.setForm({...(props.Form),formDisplay:"display",formType:"Note",editing:""})
    })

    const backToPage=(()=>{
        console.log(props.notesUsageData.currentPage)
        if(props.notesUsageData.currentPage=="Notes")
        {
            props.setnotesUsageData({...(props.notesUsageData),currentPage:"Notebooks"})
            sethideSuggession(false)
        }
        else if(props.notesUsageData.currentPage=="Notebooks")
        {
            props.setgotoHome({...(props.gotoHome), gotoHomeBtnClicked:"false"})
        }
    })
    // const arr=null;

    //  search book
    const searchBook=((ele)=>{
        props.setnotesUsageData({...(props.notesUsageData),searchBoxFocused:true})
        console.log(ele.target.value)
        // console.log(props.notesUsageData.currentNoteDetails)
        // props.notesUsageData.currentUser
        const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
        setsearchDataArr(props.mainData.notesApp[user].Notebook.filter((item) =>
            item.NotebookName.toLowerCase().includes(ele.target.value)
        ))
            console.log(searchDataArr)
    })

    // search note
    const searchNote=((ele)=>{
        console.log(ele.target.value)

    })



    // const searchActive=(()=>{
    //     props.setnotesUsageData({...(props.notesUsageData),searchBoxFocused:true})
    // })

    const searchInActive=(()=>{
        if(props.notesUsageData.searchBoxFocused==true)
        {
            props.setnotesUsageData({...(props.notesUsageData),searchBoxFocused:false})
        }
    })



    const gotoNotes=((ele)=>{
        console.log(ele)
        const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
        const book=props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === props.notesUsageData.currentNoteBook)
        props.setnotesUsageData({...(props.notesUsageData),currentNoteBook:ele,currentPage:"Notes",currentNoteDetails:props.mainData.notesApp[user].Notebook[book]})
        searchBox.current.value="";
        sethideSuggession(true)
    })
    const gotoNotesMouseEnter=((ele)=>{
        props.setnotesUsageData({...(props.notesUsageData),currentNoteBook:ele})
    })
    // const hideSuggession=(()=>{
// if(props.notesUsageData.currentPage=="Notes")
//         props.setnotesUsageData({...(props.notesUsageData),searchBoxFocused:false})
    // })

  return (
    <div className={style.headerWholeContainer}>
        <div className={style.headerTopContainer}>
            {/* <span className={style.hamburger} onClick={backToPage}>&#x2630;</span> */}
            <span className={style.hamburger} onClick={backToPage}>&#x2794;</span>
            <span className={style.logo}>
            <img src={'./images/notebookLogo.png'}/>
                <span>Notebook</span>
            </span>
            <section style={props.notesUsageData.currentPage=="Notes"?{visibility:"hidden"}:{visibility:"visible"}}>
                <input type={"text"} ref={searchBox} className={style.searchBox} onPointerOver={searchInActive} onChange={props.notesUsageData.currentPage=="Notebooks"?(ele)=>searchBook(ele):(ele)=>searchNote(ele)}/>
                <span>&#x1F50E;</span>
                {
                    props.notesUsageData.searchBoxFocused==true?
                    <div className={style.suggession}>
                        {
                            searchDataArr.length!=0?
                            searchDataArr.map((book)=>{
                                return <li className={style.searchedContent} onClick={()=>gotoNotes(book.NotebookName)} onMouseEnter={(ele)=>gotoNotesMouseEnter(book.NotebookName)}>{book.NotebookName}</li>
                            })
                            :null
                        }
                    </div>
                    :null
                }
                
            </section>
            <p className={style.createNotebook} onClick={props.notesUsageData.currentPage=="Notebooks"?createNoteBookBtnClicked:createNoteBtnClicked}>
                {props.notesUsageData.currentPage=="Notebooks"?"Notebook":"Add Notes"}
            </p>
            <div className={style.profile}>
                {props.notesUsageData.currentUser[0].toUpperCase()}
            </div>
        </div>
        <div className={style.headerBottomContainer}>

        </div>
    </div>
  )
}
