
for(i=1;i<14;i++)
{
    let div=document.createElement("div");
    document.getElementsByClassName("parent1")[0].appendChild(div).className=`child${i}`;
    document.getElementsByClassName(`child${i}`)[0].innerText=i;
}