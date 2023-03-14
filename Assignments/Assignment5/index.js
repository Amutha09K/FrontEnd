




// Designing ection

let varArr=["firstPage","blackScreen","wholeContainer"]
varArr[0]=document.getElementsByClassName("firstPage")[0];
varArr[1]=document.getElementsByClassName("blackScreen")[0];
varArr[2]=document.getElementsByClassName("wholeContainer")[0];
let buttonOn="true";
// jquery
$(document).ready(function(){  
      $(".firstPage div").click(function()
      {
        $(".firstPage").fadeToggle("slow")
      }); 
      $(".onOff").click(function()
      {
        $(".blackScreen").toggle();
      })
  });
  
$(document).ready(function(){  
    // $(".login").show()
    $(".register").hide()
    $("#createAccount").click(function()
    {
        $(".login").fadeOut("slow")
        $(".register").fadeIn("slow")
    }); 
    $(".regProce1").click(function()
    {
        $(".register").fadeOut("fast")
        $(".login").fadeIn("fast")
    });
    $(".regProce2").click(function()
    {
        $(".register2").fadeOut("slow")
        $(".register").fadeIn("slow")
    }); 
    $(".registerProcedure1").click(function()
    {
        $(".register").fadeOut("slow")
        $(".register2").fadeIn("slow")
    }); 
});


















// Processing section

class AccountRegisteration
{
    constructor(fn,ln,un,pass,date,acNo,ifsc,pin,mblNo)
    {
        this.firstName=fn;
        this.lastName=ln;
        this.userName=un;
        this.password=pass;
        this.date=date;
        this.acNo=acNo;
        this.ifsc=ifsc;
        this.pin=pin;
        this.mblNo=mblNo;

    }
}

let originalArr;
originalArr=localStorage.getItem("registration").split(",/,");

function regNext()
{
    let firstName=document.getElementById("fname").value.trim();
    let lastName=document.getElementById("lname").value.trim();
    let userName=document.getElementById("uname").value.trim();
    let password=document.getElementById("regPass").value.trim();
    let date=document.getElementById("date").value.trim();
    let mblNo=document.getElementById("mblNo").value.trim();
    let regData=[firstName,lastName,userName,password,date,mblNo]
    let regArray=[]
    regArray[0]=/[a-zA-Z]$/ //regExName
    regArray[1]=/[a-zA-Z]$/ //regExName
    regArray[2]=/[\w]$/ //regExUserName
    regArray[3]=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //regExPassword
    regArray[4]=/^\d{4}[./-]\d{2}[./-]\d{2}$/ //regExDate
    regArray[5]=/^\d{10}$/ //regMblNo
    
    console.log(regArray[0])
    console.log((regArray[0].test(regData[0]))==true);
    count=0;
    for(i=0;i<regData.length;i++)
    {
        console.log((regArray[i].test(regData[i]))==true);
        if((regArray[i].test(regData[i]))==true)
        {
            count++
            console.log(count)
        }
        else
        {
            alert("Fill the Form Properly"+regData[i]+i)
            break;
        }
    }
}

function register()
{

    let firstName=document.getElementById("fname").value.trim();
    let lastName=document.getElementById("lname").value.trim();
    let userName=document.getElementById("uname").value.trim();
    let password=document.getElementById("regPass").value.trim();
    let date=document.getElementById("date").value.trim();
    let acNo=document.getElementById("acNo").value.trim();
    let ifsc=document.getElementById("ifsc").value.trim();
    let pin=document.getElementById("pin").value.trim();
    let mblNo=document.getElementById("mblNo").value.trim();
    
    let regData=[firstName,lastName,userName,password,date,acNo,ifsc,pin,mblNo]
    let regArray=[]

    regArray[0]=/[a-zA-Z]$/ //regExName
    regArray[1]=/[a-zA-Z]$/ //regExName
    regArray[2]=/[\w]$/ //regExUserName
    regArray[3]=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //regExPassword
    regArray[4]=/^\d{4}[./-]\d{2}[./-]\d{2}$/ //regExDate
    regArray[5]=/^\d{12}$/ //regAcNo
    regArray[6]=/^\d{4}$/ //regIFSC
    regArray[7]=/^\d{4}$/ //regPin
    regArray[8]=/^\d{10}$/ //regMblNo

    count=0;
    for(i=0;i<regArray.length;i++)
    {
        if(regArray[i].test(regData[i])==true)
        {
            count++
        }
        else
        {
            // document.getElementById("errRegNotification1").innerHTML=
            alert("Fill the Form Properly"+regArray[i])
            break;
        }
    }



    document.getElementById("errRegNotification1").innerHTML="<div class=\"notification\"><p>Fill the Form Properly</p></div>"


    if(count==regArray.length)
    {


        

    
    // storing user data into local storage
    const register=new AccountRegisteration(firstName,lastName,userName,password,date,acNo,ifsc,pin,mblNo)
    let localStore=localStorage.getItem("registration")//.substring(0,localStorage.getItem("registration").length)
    let arr;
    if(localStore!="")
    {
        arr=localStore + ",/,"+JSON.stringify(register);
    }
    else
    {
        arr=localStore + JSON.stringify(register);
    }
    localStorage.setItem("registration",arr)

    // storing user data into array
    console.log("\n\n<---------------------------register button clicked--------------------------->")
    originalArr=localStorage.getItem("registration").split(",/,");


    }
    // else{
    //     alert("Please Check Your Form");
    // }
}


function login()
{
    console.log("\n\n<---------------------------login button clicked--------------------------->")
    console.log("array index 0 : "+JSON.parse(originalArr[0]).firstName)
    let name=document.getElementById("cusId").value
    let pass=document.getElementById("pass").value
    var count=0;

    // user data verification
    for(i=0;i<originalArr.length;i++)
    {
        let loginData1=JSON.parse(originalArr[i]).firstName
        let loginData2=JSON.parse(originalArr[i]).password
        if(loginData1==name && loginData2==pass)
        {
            count++;
        }
    }
    if(count==1)
    {
        alert("You are valid user")
    }
    else{

        alert("You are NOT-valid user")
    }
}


























