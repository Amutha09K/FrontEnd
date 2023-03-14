// var pageLoadCount



// element creation
function elementCreation(parentEleId,element,eleId)
{
    let childElement=document.createElement(element);
    let parent=document.getElementById(parentEleId)
    parent.appendChild(childElement).id=eleId;
}
function iconCollage(eleId)
{
    return document.getElementById(eleId).innerHTML=`  
    <nav class="collageIcon">
    <nav class="leftEle">
      <nav class="leftInner"></nav>
    </nav>
    <nav class="rightEle">
      <nav class="rightInner1"></nav>
      <nav class="rightInner2"></nav>
    </nav>
  </nav>`
}


// create new - Form

// collage icon hover event
$(document).ready(function(){
    
    $(".addNew").fadeOut();
    $("#NewBoard").click(function(){
        console.log("hiii")
        $(".addNew").fadeToggle();
    })
});





elementCreation("sidebar","div","sideinnerDiv")
document.getElementById("sideinnerDiv").innerHTML="<h5>ALL BOARDS (3)</h5>"
let slideSecArray=["platformLaunch","MarketingPlan","RoadMap","NewBoard"]
for(i=0;i<=3;i++)
{
    elementCreation("sideinnerDiv","div",slideSecArray[i])
}
document.getElementById("platformLaunch").innerHTML=`${iconCollage("platformLaunch")}<p>Platform Launch</p>`
document.getElementById("MarketingPlan").innerHTML=`${iconCollage("MarketingPlan")}<p>Marketing Plan</p>`
document.getElementById("RoadMap").innerHTML=`${iconCollage("RoadMap")}<p>Roadmap</p>`
document.getElementById("NewBoard").innerHTML=`${iconCollage("NewBoard")}<p>+Create New Board</p>`


// collage icon hover event
$(document).ready(function(){
    

    // $("#NewBoard").click(function(){
    //     console.log("hiii")
    //     $(".taskContainer").html(`<div class="creationContainer" >
    //     <div><h1>Hello</h1></div>
    //     </div>`)

    // })


    $("#platformLaunch").mouseenter(function(){
        $("#platformLaunch nav").css(`border-color`,`rgb(229 229 229)`)
    })
    $("#platformLaunch").mouseleave(function(){
        $("#platformLaunch nav").css(`border-color`,`rgb(136, 136, 136)`)
    })


    $("#MarketingPlan").mouseenter(function(){
        $("#MarketingPlan nav").css(`border-color`,`rgb(229 229 229)`)
    })
    $("#MarketingPlan").mouseleave(function(){
        $("#MarketingPlan nav").css(`border-color`,`rgb(136, 136, 136)`)
    })


    $("#RoadMap").mouseenter(function(){
        $("#RoadMap nav").css(`border-color`,`rgb(229 229 229)`)
    })
    $("#RoadMap").mouseleave(function(){
        $("#RoadMap nav").css(`border-color`,`rgb(136, 136, 136)`)
    })


    $("#NewBoard").mouseenter(function(){
        $("#NewBoard nav").css(`border-color`,`rgb(229 229 229)`)
    })
    $("#NewBoard").mouseleave(function(){
        $("#NewBoard nav").css(`border-color`,`#635FC7`)
    })
})

elementCreation("sideinnerDiv","footer","theme")




// Board column creation
var column=0,removeBtnArr=[],numOfColumn=[]
function addColumn()
{
    txtId="txt"+column
    btnId="btn"+column
    columnTextBoxCreation(txtId,btnId)
}



function columnTextBoxCreation(txtId,btnId)
{


    var divCreation=document.createElement("div");
    var inputCreation=document.createElement("input");
    var buttonCreation=document.createElement("button");
    var box=document.getElementsByClassName("columnContainer")[0]
    box.appendChild(divCreation);
    divCreation.appendChild(inputCreation).id=txtId;
    divCreation.appendChild(buttonCreation).id=btnId;
    inputCreation.type="text"
    buttonCreation.innerText="X";
    
    removeBtnArr.push(btnId);
    column++
}



// remove column text box
$(document).on('click','.columnContainer div button',function(){

    console.log(this);
    console.log(removeBtnArr)

    console.log(removeBtnArr.indexOf(this.id))

      $(this).parent().remove();
      index=(removeBtnArr.indexOf(this.id))
      console.log(removeBtnArr.splice(index,index))
      console.log(removeBtnArr)
      
});






i=0;
function boardObj(boardName)
{
    var board=board+1;
    jsonData={
        board: [{
                    "name": boardName,
                    "columns": []
                }]
        }
    i++;
}
 







function createNewBoard()
{

    console.log("removeArr : ")
    console.log(removeBtnArr)


    var boardName = document.getElementById("boardName").value
    localStorage.setItem("Board",JSON.stringify([
        ...JSON.parse(localStorage.getItem("Board") || "[]"),{BoardName : boardName},{columns:"[]"}
    ]));

    boardObj(boardName)



        console.log(jsonData)



}



        // i=0;
        // var board=board+1;
        // jsonData={
        //     board: [{
        //                 "name": boardName,
        //                 "columns": [
        //                 {
        //                     "name": "Todo",
        //                     "tasks": [
        //                     {
        //                         "title": "Plan Product Hunt launch",
        //                         "description": "",
        //                         "status": "Todo",
        //                         "subtasks": "Not Completed"
        //                     },
        //                     {
        //                         "title": "Share on Show HN",
        //                         "description": "",
        //                         "status": "",
        //                         "subtasks":"Not Completed"
        //                     },
        //                     {
        //                         "title": "Write launch article to publish on multiple channels",
        //                         "description": "",
        //                         "status": "",
        //                         "subtasks": "Not Completed"
        //                     }
        //                     ]
        //                 },
        //                 {
        //                     "name": "Doing",
        //                     "tasks": []
        //                 },
        //                 {
        //                     "name": "Done",
        //                     "tasks": []
        //                 }
        //                 ]
        //             }]
        //     }
    
        //     i++;