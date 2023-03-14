import React, { useRef } from 'react'
import style from './SavePopUp.module.css'

export default function SavePopUp(props) {
    const createNoteName=useRef();



    // note creation
    const createNote=(()=>{
        if(/^.{1,15}$/.test(createNoteName.current.value))
        {
                const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
                const book=props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === props.notesUsageData.currentNoteBook)
                console.log((props.mainData.notesApp[user].Notebook[book].Notes.findIndex(name => name.noteName === createNoteName.current.value)))
                if((props.mainData.notesApp[user].Notebook[book].Notes.findIndex(name => name.noteName === createNoteName.current.value))==-1)
                {
                    props.mainData.notesApp[user].Notebook[book].Notes.push({noteName:createNoteName.current.value,value:props.noteText.current.value});
                    console.log(props.mainData.notesApp[user].Notebook[book]);
                    props.setnotesUsageData({...(props.notesUsageData),currentNoteDetails:props.mainData.notesApp[user].Notebook[book]})
                    console.log(props.mainData)
                    localStorage.setItem("notesApp",JSON.stringify(props.mainData))
                    props.rendering==true?props.setrendering(false):props.setrendering(true)
                    props.setForm({...(props.Form),formDisplay:"",formType:"",save:""})
                }
                else
                {
                    alert("\nInstructions : \n      \t This name already exist")
                }
        }
        else{
            alert("\nInstructions : \n      \t  The name must contain between 1 and 15 characters")
        }
    })
    console.log("mainData")
    console.log(props.mainData)

    const editNote=((ele,oldname)=>{
        const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
        const book=props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === props.notesUsageData.currentNoteBook)
        const note=props.mainData.notesApp[user].Notebook[book].Notes.findIndex(name => name.noteName === oldname)
        if(oldname === createNoteName.current.value || props.mainData.notesApp[user].Notebook[book].Notes.findIndex(name =>name.noteName === createNoteName.current.value)==-1)
        {
            // console.log(oldname)
            // console.log(props.Form)
            // console.log(props.noteText.current)
            // console.log(props.mainData.notesApp[user].Notebook[book].Notes[note].value)
            // console.log(props.noteText.current.value)
            props.mainData.notesApp[user].Notebook[book].Notes[note].noteName=createNoteName.current.value
            props.mainData.notesApp[user].Notebook[book].Notes[note].value=props.noteText.current.value
            localStorage.setItem("notesApp",JSON.stringify(props.mainData))
            props.setForm({...(props.Form),formDisplay:"",formType:"",editing:"",editingContents:"",editingNote:"",save:""})
        }
    })




  return (
    <div className={style.createBook}>
        <input type="text" className={style.noteBookName} ref={createNoteName} placeholder={"Note Name Here"} autoFocus defaultValue={props.Form.editingContents.noteName!=""?props.Form.editingContents.noteName:null}/>
        <button onClick={props.Form.editing!=""?(ele)=>editNote(ele,props.Form.editingContents.noteName):createNote}>
            {props.Form.editing!=""?"Save":"Create"}
        </button>
    </div>
  )
}
