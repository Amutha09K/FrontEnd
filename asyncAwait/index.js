async function getFile()
{
    let promise=new Promise(function(resolve){
        let request=new XMLHttpRequest()
        request.open('GET','hello.html')
        request.onload=function(){
            if(request.status==200)
            {
                resolve(request.response);
            }
            else{
                resolve("file not found")
            }
        }
        request.send();
    });
    document.getElementById("first").innerHTML=await promise;
}


function clickMe()
{
    getFile();
}