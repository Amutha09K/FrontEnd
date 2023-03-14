import React, { useRef } from 'react'
import SavePopUp from '../SavePopUp/SavePopUp';
import style from './FormComp.module.css'

export default function FormComp(props) {

    const createBookName=useRef();
    const createNoteName=useRef();
    const noteText=useRef();

    const displayNone=(()=>{
        props.setForm({...(props.Form),formDisplay:"",formType:"",save:""})
    })
    const createNoteBook=(()=>{
        if(/^.{1,15}$/.test(createBookName.current.value))
        {
                const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
                console.log(props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === createBookName.current.value))
                if((props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === createBookName.current.value.trim()))==-1)
                {

                    console.log(props.NotebookDetails)
                    props.setNotebookDetails({...(props.NotebookDetails),noteBookName:createBookName.current.value.trim()})
                    props.setgotoHome({...(props.gotoHome),createNoteBook:"true"})
                    props.setstorageData(JSON.parse(localStorage.getItem("notesApp")))
                    console.log(props.storageData)
                    props.rendering==true?props.setrendering(false):props.setrendering(true)
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

    const editNoteBook=((ele,oldname)=>{
        const user=props.mainData.notesApp.findIndex(name => name.currentUser === props.notesUsageData.currentUser)
        if((props.mainData.notesApp[user].Notebook.findIndex(name => name.NotebookName === createBookName.current.value.trim()))==-1)
        {
            props.setForm({...(props.Form),formDisplay:"",formType:"",editing:""})
            let userIndex=props.mainData.notesApp.findIndex(name=>name.currentUser===props.notesUsageData.currentUser);
            let notebookIndex=props.mainData.notesApp[userIndex].Notebook.findIndex(name=>name.NotebookName===oldname)
            props.mainData.notesApp[userIndex].Notebook[notebookIndex].NotebookName=createBookName.current.value.trim()
        }
        else
        {
            alert("\nInstructions : \n      \t This name already exist Change your book name")
        }
    })

    const deleteNotesBook=((formType,typeFor)=>{
        console.log(typeFor)//formType means - it's a delete form & typeFor means - this process for note or notebook
        
        console.log("props.gotoHome.deleteOptionClicked",props.gotoHome.deleteOptionClicked)
        if(typeFor=="Notebook")
        {
            props.setgotoHome({...(props.gotoHome),deleteOptionClicked:true,deletedPartType:"Notebook"})
        }
        else if(typeFor=="Note")
        {
            console.log(props.gotoHome.deleteOptionClicked)
            console.log(props.gotoHome.deletedPartType)
            props.setgotoHome({...(props.gotoHome),deleteOptionClicked:true,deletedPartType:"Note"})
        }
    })


    const SaveNote=(()=>{
        if(noteText.current.value!="")
        {
            props.setForm({...(props.Form),save:"clicked"})
        }
        else
        {
            alert("\nInstructions : \n      \t  No text added so can't Save this Notes")
        }
    })

    const hideSaveForm=(()=>{
        if(props.Form.save==="clicked")
        {
            props.setForm({...(props.Form),save:""})
        }
    })
    
    const chumma=(()=>{
        // console.log(props.NotebookDetails)
    })


  return (
    <div className={style.formWholeContainer}  onClick={chumma}>
        {
            props.Form.formType!=""?
            <div className={props.Form.formType=="Note"?style.userNameError+" "+style.userNameError2:style.userNameError}>
               {
                props.Form.formType=="signUpUserName"?
                <ul>
                    <li style={{listStyleType:'none'}} className={style.errorFillBox}>
                        Please Fill All Details
                    </li>
                    <li style={{listStyleType:'none'}} className={style.errorTitle}>
                        UserName
                    </li>
                    <li>
                        You should use minimum '5' characters with 2-3 alphabets
                    </li>
                    <li>
                     Use underscore instant of space
                    </li>
                    <li style={{listStyleType:'none'}} className={style.errorTitle}>
                        Password
                    </li>
                    <li>
                        Don't use space
                    </li>
                    <li>
                        You should use minimum '6' characters with 1-2 alphabets
                    </li>
                </ul>:props.Form.formType=="alreadyExist"?
                <p className={style.alreadyExist}>
                    This Username already exist
                </p>:
                props.Form.formType=="signInWrong"?
                <p className={style.signInWrong}>
                    Invalid user, Signup to create your account
                </p>:
                props.Form.formType=="createNoteBookForm"?
                <div className={style.createBook}>
                <input type="text" className={style.noteBookName} ref={createBookName} placeholder={"Notebook Name Here"} autoFocus defaultValue={props.Form.editing!=""?props.Form.editing:null}/>
                <button onClick={props.Form.editing!=""?(ele)=>editNoteBook(ele,props.Form.editing):createNoteBook}>
                    {props.Form.editing!=""?"Rename":"Create"}
                </button>
                </div>
                // :
                // props.Form.formType=="createNotesForm"?
                // <div className={style.createBook}>
                // <input type="text" className={style.noteBookName} ref={createNoteName} placeholder={"Note Name Here"} autoFocus defaultValue={props.Form.editing!=""?props.Form.editing:null}/>
                // <button onClick={props.Form.editing!=""?(ele)=>editNote(ele,props.Form.editing):createNote}>
                //     {props.Form.editing!=""?"Rename":"Create"}
                // </button>
                // </div>
                :
                props.Form.formType=="delete"?
                <div className={style.delete}>
                    <p>
                    Are you sure you want to delete this {props.Form.content}?
                    </p>
                    <button onClick={()=>deleteNotesBook(props.Form.formType,props.Form.content)}>
                        Delete
                    </button>
                </div>
                :props.Form.formType=="Note"?
                <div className={style.note}>
                <input type={"button"} className={style.noteSaveBtn} value={"Save"} onClick={SaveNote}/>
                {
                    props.Form.save=="clicked"?
                    <div className={style.whole}>
                    <SavePopUp storageData={props.storageData} noteText={noteText} setstorageData={props.setstorageData} setForm={props.setForm} Form={props.Form} notesUsageData={props.notesUsageData} setnotesUsageData={props.setnotesUsageData} NotebookDetails={props.NotebookDetails} setNotebookDetails={props.setNotebookDetails} gotoHome={props.gotoHome} setgotoHome={props.setgotoHome} mainData={props.mainData} setmainData={props.setmainData} rendering={props.rendering} setrendering={props.setrendering}/>
                    </div>
                    :null
                }
                    <textarea placeholder={"Your Text Here..."} ref={noteText} defaultValue={props.Form.editing=="note"?props.Form.editingContents.value:null}>
                       
                    </textarea>
                </div>
                :null
                }
                <input type={"button"} className={props.Form.formType=="Note"?style.noteCancelBtn:null} value={props.Form.formType=="Note"?"Cancel":"X"} onClick={props.Form.save=="clicked"?hideSaveForm:displayNone}/>
            </div>:null
        }
    </div>
  )
}
