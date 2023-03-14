function result()
{
    var m1=document.getElementById("Mark1").value.trim();
    var m2=document.getElementById("Mark2").value.trim();
    var m3=document.getElementById("Mark3").value.trim();
    var m4=document.getElementById("Mark4").value.trim();
    if((m1<=100 && m2<=100 && m3<=100 && m4<=100) && (m1!="" && m2!="" && m3!="" && m4!=""))
    {
        var grade= ((Number(m1)+Number(m2)+Number(m3)+Number(m4))/400)*100
        if(grade<=100 && grade>=90)
        {
            gradeOf("A");
        }
        else if(grade<90 && grade>=80)
        {
            gradeOf("B");
        }
        else if(grade<80 && grade>=70)
        {
            gradeOf("C");
        }
        else if(grade<70 && grade>=60)
        {
            gradeOf("D");
        }
        else if(grade<60 && grade>=50)
        {
            gradeOf("E");
        }
        else if(grade<50 && grade>=0)
        {
            gradeOf("F");
        }
    }
    else
    {
        document.getElementById("p").innerText="Please Give me a valid Mark";
    }
}


function gradeOf(grade)
{
    document.getElementById("p").innerText="Your Grade Is : "+grade;
}