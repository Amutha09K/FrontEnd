// Create your own custom prototype methods for Array and String objects.
//Array
arr1=[10,11,12,13,14,15]
arr2=[1,2,12,12,23]
Array.prototype.arrLength=function()
{
    var count=0;
    var arr1=this;
    for(var i of arr1)
    {
        count++;
    }
    return count;
}

console.log(arr1.arrLength());

// array concatenation
Array.prototype.arrConcat=function(arr2)
{
    var arr=this;
    for(var i of arr2)
    {
        arr.push(i);
    }
    return arr;
}
console.log(arr1.arrConcat(arr2));

// array join()
Array.prototype.arrJoin=function(joiningWrd)
{
    var join="",count=0;
    for(var i of this)
    {
        join+=i;
        count++;
        if(count!=this.length)
        {
            join+=joiningWrd;
        }
    }
    return join;
}
console.log(arr1.arrJoin("-"));

// array reverse()
Array.prototype.arrReverse=function()
{
    var arr=[];
    for(var i=1;i<=this.length;i++)
    {
        arr.push(this[this.length-i]);
    }
    return arr;
}
console.log(arr1.arrReverse());

// array Sort() ascending order
Array.prototype.asnSort=function()
{
    this.sort(
        function(a, b)
        {
            return a-b
        });
        return this;
}
console.log(arr2.asnSort());

// array Sort() descending order
Array.prototype.dsnSort=function()
{
    this.sort(
        function(a, b)
        {
            return b-a
        });
        return this;
}
console.log(arr2.dsnSort());


//String
var str="hi all",str2="have a nice day",str3="hello";

// string length()
String.prototype.strLength=function()
{
  var arr=this.split("");
  var count=0;
  for(var i of arr)
  {
        count++;
  }
  return count;
}
console.log(str.strLength());

// String reverse()
String.prototype.strReverse=function()
{
    var arr=[];
    for(var i=1;i<=this.length;i++)
    {
        arr.push(this[this.length-i]);
    }
    return arr.join("");
}
console.log(str.strReverse());

// String Slice()
String.prototype.strSlice=function(startingIndex,endingIndex)
{
    var arr=this.split(""),arr2=[];
    if(typeof startingIndex != Number)
    {
        startingIndex=0;
    }
    if(endingIndex==undefined)
    {
        endingIndex=arr.length;
    }
    for(var i=startingIndex;i<endingIndex;i++)
    {
        arr2.push(this[i]);
    }
    return arr2.join("");
}
console.log(str.strSlice(0,5));

// String Slice()
String.prototype.strVowelCount=function()
{
    var arr=["a","A","e","E","i","I","o","O","u","U"],count=0
    for(var i of this)
    {
        if(arr.includes(i))
        {
            count++;
        }
    }
    return count;
}
console.log(str.strVowelCount());

// String repeat()
String.prototype.strRepeat=function(n)
{
    var result=""
    for(i=1;i<=n;i++)
    {
        result+=this+" "
    }
    return result;
}
console.log(str3.strRepeat(5));


// Math
Math.pow=function(num,base)
{
    var result=1;
    for(i=0;i<base;i++)
    {
        result*=num;
    }
    return result
}
console.log(Math.pow(2,4));

// Math absolute Method
Math.absOwn=function(n)
{
    if((typeof n == "number")&&(0>n))
    {
        return n*(-1)
    }
    else{
        return n;
    }
}
console.log(Math.absOwn(-4));

// Math PI Method
Math.ownPI=function(n)
{
    return 3.14;
}
console.log(Math.ownPI());

// Math max Method
Math.max=function(n)
{
        var max=[0];
        for(var i of n)
        {
            if(max<i)
            {
                max=i;
            }
        }
    return max;
}
console.log(Math.max(arr1));

// Math min Method
Math.min=function(n)
{
        var min=n[0];
        for(var i of n)
        {
            if(min>i)
            {
                min=i;
            }
        }
    return min;
}
console.log(Math.min(arr1));
