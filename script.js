// Create your own custom prototype methods for Array and String objects.
//Array
Array.prototype.sum=function()
  {
    var arr=this,sum=0;
    for(i=0;i<arr.length;i++)
      {
        sum+=arr[i];
      }
    return sum;
  }
var arr=[1,5,2,5,2];
console.log(arr.sum());

//String
String.prototype.uniqueWord=function()
  {
    var arr=this.split(" ");
    var arr2=new Set(arr);
    var result="";
    for (let i of arr2){
      result+=i+" "
    }
    return result;
  }
var str="hi hello hi";
console.log(str.uniqueWord());