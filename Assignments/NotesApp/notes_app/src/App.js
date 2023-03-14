import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import FormComp from './Component/FormComp/FormComp';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import {Route,Routes} from 'react-router-dom';

export const userContext=createContext(null);

function App() {
  const [rendering,setrendering]=useState(false)
  // let rendering=false;
  const [storageData,setstorageData]=useState()
  const [Form,setForm]=useState({
    formDisplay:"none",
    formType:"",
    editing:"",
    editingContents:"",
    editingNote:"",
    content:"",
    save:""
  })
  console.log(JSON.parse(localStorage.getItem("notesApp")))
  const [mainData,setmainData]=useState(localStorage.getItem("notesApp")?JSON.parse(localStorage.getItem("notesApp")):null);
  const [signUpData,setsignUpData]=useState({
    currentUser:"",
    userPassword:"",
    Notebook:[]
  })
  const [NotebookDetails,setNotebookDetails]=useState({
    noteBookName:"",
    Notes:[]
  })
  const [gotoHome,setgotoHome]=useState({
    gotoHomeBtnClicked:"false",
    createNoteBook:"false",
    editNoteBook:"false",
    deleteOptionClicked:false,
    deletedPartType:"",
  })
  const [notesUsageData,setnotesUsageData]=useState({
    // currentUser:"",
    currentUser:"amutha",
    currentNoteBook:"",
    // currentPage:"",
    currentPage:"Notebooks",
    currentNoteDetails:"",
    searchBoxFocused:false,
    searchedDataArr:null
  })
  const [passingData,setpassingData]=useState("Hello")

  // page rendering useEffect
  useEffect(()=>{
    setstorageData(JSON.parse(localStorage.getItem("notesApp")))

  },[rendering])

  // create noteBook 
  useEffect(()=>{
    if(gotoHome.createNoteBook=="true")
    {
      createBook(mainData)
    }
  },[gotoHome.createNoteBook])
  function createBook(mainData){
      const user=mainData.notesApp.findIndex(name => name.currentUser === notesUsageData.currentUser)
      mainData.notesApp[user].Notebook.push({
        NotebookName:NotebookDetails.noteBookName,
        Notes:[]
      })
    localStorage.setItem("notesApp",JSON.stringify(mainData))
    console.log("mainData")
    console.log(mainData.notesApp[mainData.notesApp.findIndex(name => name.currentUser === notesUsageData.currentUser)])
    setgotoHome({...(gotoHome),createNoteBook:"false"})
    setForm({...(Form),formDisplay:"",formType:""})
  }
  
// set value into localStorage
  if(!localStorage.getItem("notesApp"))
  {
    localStorage.setItem("notesApp",JSON.stringify({notesApp:[]}))
  }

  return (
    <userContext.Provider value={{passingData,setpassingData}}>
      <div>
      {/* <Routes> */}
        {
        gotoHome.gotoHomeBtnClicked=="false"?
        // <Route path="/" element={
          <Login setForm={setForm} Form={Form} setsignUpData={setsignUpData} signUpData={signUpData} gotoHome={gotoHome} setgotoHome={setgotoHome} notesUsageData={notesUsageData} setnotesUsageData={setnotesUsageData} setmainData={setmainData}/>
        // }/>
        :
        // <Route path="/NotesApp" element={
          <Home storageData={storageData} setstorageData={setstorageData} notesUsageData={notesUsageData} setnotesUsageData={setnotesUsageData} setForm={setForm} Form={Form} rendering={rendering} mainData={mainData} currUserMainData={mainData.notesApp[mainData.notesApp.findIndex(name => name.currentUser === notesUsageData.currentUser)]} gotoHome={gotoHome} setgotoHome={setgotoHome} />
        // }/>    
        }
        {/* </Routes> */}
        {
          Form.formDisplay=="display"? <FormComp storageData={storageData} setstorageData={setstorageData} setForm={setForm} Form={Form} notesUsageData={notesUsageData} setnotesUsageData={setnotesUsageData} NotebookDetails={NotebookDetails} setNotebookDetails={setNotebookDetails} gotoHome={gotoHome} setgotoHome={setgotoHome} mainData={mainData} setmainData={setmainData} rendering={rendering} setrendering={setrendering}/> :null
        }
      </div>
    </userContext.Provider>
  );
}

export default App;
