class Clock
{
    // let hour,minutes,seconds;
    constructor(hour,minute,seconds)
    {
        this.hour=hour;
        this.minutes=minute;
        this.seconds=seconds;
    }
    time()
    {
        if(((this.hour>0)&&(this.hour<25)) && ((this.minutes>=0)&&(this.minutes<60)) && ((this.seconds>=0)&&(this.seconds<60)))
        {
            var timeMode="";
            if((this.hour<=12)&&(this.hour>=1))
            {
                timeMode="AM";
            }
            else
            {
                timeMode="PM";
            }
            return this.hour+":"+this.minutes+":"+this.seconds+" "+timeMode;
        }
        else{
            return "invalid time";
        }
    }
}
const obj=new Clock(1,30,20);
console.log(obj.time());
const obj2=new Clock(20,10,59);
console.log(obj2.time());



// 

class DayFinder
{
    constructor(date,month,year)
    {
        this.date=date;
        this.month=month;
        this.year=year;
    }
    dayFinder()
    {
        var i=0;
        let monthChk31=[1,3,5,7,8];
        let yearCalc,yearMonth,monthCalc,result,ordYr,leapYr,dateCalc=0;
        let monthCount1=[3,0,3,2,3,2,3,3,3,2,3,2];
		let monthCount2=[3,1,3,2,3,2,3,3,3,2,3,2];
		let monthCount=monthCount1.length;
        let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const innerObj=new DayFinder();


		if( ((this.date<=31)&&(this.date>=0)) && ((this.month<=12)&&(this.month>=0)) && (this.year>=0) )
		{
			if((Math.floor(this.year%4))==0)
			{
				if((Math.floor(this.year%400))==0)
				{
					monthCount=monthCount2;
					yearCalc=Math.floor(Number(this.year)%400);
					monthCalc=Math.floor(Number(yearCalc)%100);
					yearMonth=0;
					for(i=0;i<(this.month-1);i++)
					{
						dateCalc+=Number(monthCount[i]);
					}
					innerObj.dayCalc(month,monthCount,this.date,monthCalc,yearMonth,day);
				}
				else if((Math.floor(this.year%100))!=0)
				{
					monthCount=monthCount2;
					yearCalc=Math.floor(Number(this.year)%400);
					monthCalc=Math.floor(Number(yearCalc)%100);
					yearMonth=0;
					for(i=0;i<(this.month-1);i++)
					{
						dateCalc+=Number(monthCount[i]);
					}
					innerObj.dayCalc(this.month,monthCount,this.date,monthCalc,yearMonth,day);
				}else
				{
					monthCount=monthCount1;
					yearCalc=Math.floor(Number(this.year)%400);
					monthCalc=Math.floor(Number(yearCalc)%100);
					if(yearCalc>=100)
					{
						yearMonth=Number(yearCalc)-Number(monthCalc);
					}
					else
					{
						yearMonth=0;
					}
					if(yearMonth==400)
					{
						yearMonth=0;
					}
					else if(yearMonth==300)
					{
						yearMonth=1;
					}
					else if(yearMonth==200)
					{
						yearMonth=3;
					}
					else if(yearMonth==100)
					{
						yearMonth=5;
					}
					for(i=0;i<(this.month-1);i++)
					{
						dateCalc+=Number(monthCount[i]);
					}
					innerObj.dayCalc(this.month,monthCount,this.date,monthCalc,yearMonth,day);
				}
			}
			else
			{
					monthCount=monthCount1;
					yearCalc=Math.floor(Number(this.year)%400);
					monthCalc=Math.floor(Number(yearCalc)%100);

					if(yearCalc>=100)
					{
						yearMonth=Number(yearCalc)-Number(monthCalc);
					}
					else
					{
						yearMonth=0;
					}
					if(yearMonth==400)
					{
						yearMonth=0;
					}
					else if(yearMonth==300)
					{
						yearMonth=1;
					}
					else if(yearMonth==200)
					{
						yearMonth=3;
					}
					else if(yearMonth==100)array reverse()
                    // Array.prototype.arrReverse=function()
                    // {
                    //     var arr=[];
                    //     // if((arr[0]=="[")&&(arr[arr.length]=="]"))
                    //     for(var i=1;i<=this.length;i++)
                    //     {
                    //         arr.push(this[this.length-i]);
                    //     }
                    //     return arr;
                    // }
                    // console.log(arr1.arrReverse());
					{
						yearMonth=5;
					}
					for(i=0;i<(this.month-1);i++)
					{
						dateCalc+=Number(monthCount[i]);
					}
					innerObj.dayCalc(this.month,monthCount,this.date,monthCalc,yearMonth,day);
			}
		}
		else
		{
			console.log("invalid Date");
		}
	}
	dayCalc(month,monthCount,date,monthCalc,yearMonth,day)
	{	
				var leapYr,ordYr,dateCalc=0,result=0,i=0;
					for(i=0;i<(month-1);i++)
					{
						dateCalc+=Number(monthCount[i]);
					}
					dateCalc+=date;
					monthCalc--;
					leapYr=(Math.floor(monthCalc/4));
					ordYr=monthCalc-leapYr;
					monthCalc=(leapYr*2+ordYr);
					result=(yearMonth+(monthCalc))+dateCalc;
					console.log(day[(Math.floor(Number(result)))%7]);
                    
					console.log("The Next Day is : "+day[(Math.floor(Number(result)))%7+1]);
	}

}
const findDayObj=new DayFinder(17,6,1998);
findDayObj.dayFinder();