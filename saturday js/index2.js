var obj={a:1,b:2,c:3};
toArray(obj)

function toArray(obj)
{
    var arr1=Object.keys(obj),arr2=Object.values(obj),result=[];
    for(i=0;i<arr1.length-1;i++)
    {
        result.push([arr1[i]+":"+arr2[i]])
    }
    console.log(result)
}