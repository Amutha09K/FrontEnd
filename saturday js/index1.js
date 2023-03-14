var arr=[1,10,12,3,2,9],reachedNum=6
minimumSteps(arr,reachedNum)

function minimumSteps(arr,num){
    arr.sort(function(a, b){return a - b});
    var sum=0,count=0;
    for(i=0;i<arr.length-1;i++){
        sum+=arr[i]
        if(sum>=num){
            console.log(count)
            break;
        }
        else{
            count++;
        }
    }
}
