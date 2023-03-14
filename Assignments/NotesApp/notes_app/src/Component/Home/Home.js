import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Header from '../Header/Header'

export default function Home(props) {
    console.log("Rendering..........")
    const [popUp,setpopUp]=useState(false);
    const [removeBookEle,setremoveBookEle]=useState();
// i am amutha from pottal
// and i am paithiyam
    let storageData=props.storageData;
    useEffect(()=>{
        storageData=props.storageData
        console.log("storageData")
        console.log(props.currUserMainData)
        
      if(props.rendering==true)
      {
        props.setstorageData(JSON.parse(localStorage.getItem("notesApp")))
        storageData=props.storageData
      }
      else
      {
        props.setstorageData(JSON.parse(localStorage.getItem("notesApp")))
        storageData=props.storageData
      }
      },[])

      const dotDisplay=((ele)=>{
        ele.target.parentElement.children[2].style.display="inline-block"
    })
    const dotUnDisplay=((ele)=>{
        ele.target.parentElement.children[2].style.display="none"
        ele.target.parentElement.children[3].style.display="none"
    })
    const displayPopUp=((ele)=>{
        if(popUp==false)
        {
            ele.target.parentElement.children[3].style.display="none"
            setpopUp(true)
        }
        else
        {
            ele.target.parentElement.children[3].style.display="inline-block"
            setpopUp(false)
        }
    })

    const removeNotebookFormCalling=((ele)=>{
        setremoveBookEle(ele)
        props.setForm({...(props.Form),formDisplay:"display",formType:"delete",content:"Notebook"})
    })

    useEffect(()=>{
        console.log(props.gotoHome.deleteOptionClicked)
        console.log(props.gotoHome.deletedPartType)
        if(props.gotoHome.deleteOptionClicked==true && props.gotoHome.deletedPartType=="Notebook")
        {
            removeNotebook(removeBookEle)
        }
        else if(props.gotoHome.deleteOptionClicked==true && props.gotoHome.deletedPartType=="Note")
        {
            console.log("Deleting......")
            removeNote(removeBookEle)
        }
    },[props.gotoHome.deleteOptionClicked])

    const removeNotebook=((ele)=>{
        console.log("removing element.....")
        props.currUserMainData.Notebook.splice(props.currUserMainData.Notebook.findIndex(note => note.NotebookName === ele.target.parentElement.parentElement.children[1].innerText),1)
        let data=JSON.parse(localStorage.getItem("notesApp"))
        let index=data.notesApp.findIndex(name => name.currentUser === props.currUserMainData.currentUser);
        console.log(data.notesApp[index]=(data.notesApp[index],props.currUserMainData))
        localStorage.setItem("notesApp",JSON.stringify(data))
        props.setstorageData(JSON.parse(localStorage.getItem("notesApp")))
        ele.target.parentElement.style.display="none"
        console.log(ele.target.parentElement.parentElement.children[3])
        ele.target.parentElement.parentElement.children[3].style.display="none"
        ele.target.parentElement.parentElement.children[0].style.backgroundImage=`url(https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random()*100)})`
        // // ele.target.parentElement.children[2].style.display="none"
        // props.setgotoHome({...(props.gotoHome),deleteOptionClicked:"false",deletedPartType:""})
        props.setgotoHome({...(props.gotoHome),deleteOptionClicked:"false",deletedPartType:""})
        props.setForm({...(props.Form),formDisplay:"",formType:""})
    })

    const editNotebook=((ele)=>{
        ele.target.parentElement.style.display="none"
        props.setForm({...(props.Form),formDisplay:"display",formType:"createNoteBookForm",editing:ele.target.parentElement.parentElement.children[1].innerText})
    })

    const editNote=((ele)=>{
        // console.log(ele.target.parentElement.parentElement.children[1].innerText)
        const note=props.notesUsageData.currentNoteDetails.Notes.findIndex(note=>note.noteName===ele.target.parentElement.parentElement.children[1].innerText);
        console.log(props.notesUsageData.currentNoteDetails.Notes[note])
        props.setForm({...(props.Form),formDisplay:"display",formType:"Note",editing:"note",editingNote:ele.target.parentElement.parentElement.children[1].innerText,editingContents:props.notesUsageData.currentNoteDetails.Notes[note]})
    
        ele.target.parentElement.style.display="none"
    })

    const removeNoteFormCalling=((ele)=>{
        setremoveBookEle(ele)
        props.setForm({...(props.Form),formDisplay:"display",formType:"delete",content:"Note"})
    })

    const removeNote=((ele)=>{
        const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
        const book=props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === props.notesUsageData.currentNoteBook)
        const note=props.mainData.notesApp[user].Notebook[book].Notes.findIndex(name => name.noteName === ele.target.parentElement.parentElement.children[1].innerText)
        // props.setnotesUsageData({...(props.notesUsageData),currentNoteBook:ele,currentPage:"Notes",currentNoteDetails:props.mainData.notesApp[user].Notebook[book]})

        props.mainData.notesApp[user].Notebook[book].Notes.splice(note,1)
        console.log(props.mainData.notesApp[user].Notebook[book].Notes)
        localStorage.setItem("notesApp",JSON.stringify(props.mainData))
        ele.target.parentElement.style.display="none"
        props.setgotoHome({...(props.gotoHome),deleteOptionClicked:"false",deletedPartType:""})
        props.setForm({...(props.Form),formDisplay:"",formType:""})
    })

    const chumma=((ele)=>{
        // console.log(ele)

        // props.setnotesUsageData({...(props.notesUsageData),searchBoxFocused:false})
    })
    const gotoNotes=((ele)=>{
        const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
        const book=props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === props.notesUsageData.currentNoteBook)
        props.setnotesUsageData({...(props.notesUsageData),currentNoteBook:ele,currentPage:"Notes",currentNoteDetails:props.mainData.notesApp[user].Notebook[book]})

    })
    const gotoNotesMouseEnter=((ele)=>{
        props.setnotesUsageData({...(props.notesUsageData),currentNoteBook:ele})
    })

  return (
    <div>
        <Header notesUsageData={props.notesUsageData} setnotesUsageData={props.setnotesUsageData} gotoHome={props.gotoHome} setgotoHome={props.setgotoHome} setForm={props.setForm} Form={props.Form} mainData={props.mainData}/>   
        <h1 className={style.stickyH1}>
            {props.notesUsageData.currentNoteBook!="" && props.notesUsageData.currentPage=="Notes"?props.notesUsageData.currentPage+" of ("+props.notesUsageData.currentNoteBook+"_book)":props.notesUsageData.currentPage}
        </h1>
        <div className={style.wholeBookNotesContainer} onClick={chumma}>
            <div>
            {

// props.notesUsageData.currentPage=="Notebooks" && props.notesUsageData.searchBoxFocused==?
props.notesUsageData.currentPage=="Notebooks"?

                props.currUserMainData?props.currUserMainData.Notebook?
                props.currUserMainData.Notebook.map((book,i)=>{
                    return (
                        <div className={style.notebookDiv} onMouseEnter={(ele)=>dotDisplay(ele)} onMouseLeave={(ele)=>dotUnDisplay(ele)}>
                            <section onDoubleClick={(ele)=>gotoNotes(ele.target.nextElementSibling.innerText)} onMouseEnter={(ele)=>gotoNotesMouseEnter(ele.target.nextElementSibling.innerText)} style={{backgroundImage: `url(https://source.unsplash.com/random/300x200?sig=${i})`,backgroundSize: 'cover',}}></section>
                            <p>{book.NotebookName}</p>
                            <span style={{display:"none"}} onClick={displayPopUp}>&#x2026;</span>
                            <ul style={{display:"none"}}>
                                <li onClick={(ele)=>editNotebook(ele)}>Rename</li>
                                <li onClick={(ele)=>removeNotebookFormCalling(ele)}>Delete</li>
                            </ul>
                        </div>
                    )
                })
                :
                null
                :null

            :
                props.notesUsageData.currentPage=="Notes" && props.currUserMainData.Notebook[props.currUserMainData.Notebook.findIndex(name => name.NotebookName === props.notesUsageData.currentNoteBook)].Notes.length!=0?
                    props.notesUsageData.currentNoteDetails.Notes.map((note,i)=>{
                        return (
                            <div className={style.notebookDiv} onMouseEnter={(ele)=>dotDisplay(ele)} onMouseLeave={(ele)=>dotUnDisplay(ele)}>
                            <section className={style.noteSection}></section>
                            <p className={style.noteP}>{note.noteName}</p>
                            <span style={{display:"none"}} onClick={displayPopUp}>&#x2026;</span>
                            <ul style={{display:"none"}}>
                                <li onClick={(ele)=>editNote(ele)}>Open</li>
                                <li onClick={(ele)=>removeNoteFormCalling(ele)}>Delete</li>
                            </ul>
                        </div>
                        )
                    })
            :
            null
            }
            </div>
        </div> 
    </div>
  )
}
