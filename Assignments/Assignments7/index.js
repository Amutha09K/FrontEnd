let quote=document.getElementById("Quote")
let author=document.getElementById("author")




function title(a)
{
    console.log("a is :"+a)
}
function menu()
{
    console.log("a is :")
}

function getHtttpRequest()
  {
    let titleArr=["happiness","family","friendship","best","famous","food","good","life","love","success","future","funny","failure","experience","education","dreams","cool","beauty","amazing"];
   const httpRequest=new XMLHttpRequest(); 
    httpRequest.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
      {
        let quoteObject = JSON.parse(httpRequest.responseText);
        console.log(typeof(quoteObject));
        console.log(quoteObject[0].quote);
        quote.innerText=quoteObject[0].quote;
        author.innerText="-  "+quoteObject[0].author;
        console.log(url)
      }
    }
     
    let url="https://api.api-ninjas.com/v1/quotes?category="+titleArr[Math.floor(Math.random() * (titleArr.length - 0) ) + 0];
    httpRequest.open("GET",url);
    httpRequest.setRequestHeader("X-Api-Key","9S2/buxa8AFnm3Pwkfwu0w==ubZSVnebJMxx7JxS");
    httpRequest.send();
  }
getHtttpRequest();
