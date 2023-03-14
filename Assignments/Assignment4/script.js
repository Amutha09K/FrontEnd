

    let num=document.getElementsByClassName("num")[0];
function numChange(a)
{
    num.textContent=a;
}
console.log(num.textContent)
function generate()
{
    let numArr=[0,1,2,3,4,5,6,7,8,9],symbolArr=["~","`","!","@","#","$","%","^","&","*","?"],alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],value=0;
    let passwordArr=[];
    let ckBox1=document.getElementsByClassName("chkBox1")[0];
    let ckBox2=document.getElementsByClassName("chkBox2")[0];
    let ckBox3=document.getElementsByClassName("chkBox3")[0];
    let ckBox4=document.getElementsByClassName("chkBox4")[0];
    if((ckBox1.checked==true)||(ckBox2.checked==true)||(ckBox3.checked==true)||(ckBox4.checked==true))
    {
        if(ckBox1.checked==true)
        {
            for(i=0;i<num.textContent;i++)
            {
                let upper=alphabets[Math.floor(Math.random() * (alphabets.length- 0) ) + 0]
                passwordArr.push(upper.toUpperCase())
            }
                value++
        }
        if(ckBox2.checked==true)
        {
            for(i=0;i<num.textContent;i++)
            {
                passwordArr.push(alphabets[Math.floor(Math.random() * (alphabets.length- 0) ) + 0])
            }
                value++
        }
        if(ckBox3.checked==true)
        {
            for(i=0;i<num.textContent;i++)
            {
                passwordArr.push(numArr[Math.floor(Math.random() * numArr.length)]);
            }
            value++
        }
        if(ckBox4.checked==true)
        {
            for(i=0;i<num.textContent;i++)
            {
                passwordArr.push(symbolArr[Math.floor(Math.random() * symbolArr.length)]);
            }
            value++
        }
        shuffle(passwordArr);
        let password=""
        for(i=0;i<num.textContent;i++)
        {
            password+=passwordArr[i];
        }
        console.log(password);
        document.getElementById("password").style.color="#d4f4ff"
        document.getElementById("password").innerText=password;

        let div1=document.getElementById("div1");
        let div2=document.getElementById("div2");
        let div3=document.getElementById("div3");
        let div4=document.getElementById("div4");
        let strength=document.getElementById("strengthTxt");
        strength.style.color="white";
        strength.style.fontSize="22px";
        strength.style.textTransform="uppercase";

        if((value==1)&&(num.textContent<=4))
        {
            div4.style.backgroundColor="red";
            div3.style.backgroundColor="transparent";
            div2.style.backgroundColor="transparent";
            div1.style.backgroundColor="transparent";

            strength.innerText="too weak!";
        }
        else if((value==2)&&(num.textContent>=3)&&(num.textContent<=4))
        {
            div4.style.backgroundColor="orange";
            div3.style.backgroundColor="orange";
            div2.style.backgroundColor="transparent";
            div1.style.backgroundColor="transparent";

            strength.innerText="weak";
        }
        else if((value==3)&&(num.textContent>=4)&&(num.textContent<=7))
        {
            div4.style.backgroundColor="yellow";
            div3.style.backgroundColor="yellow";
            div2.style.backgroundColor="yellow";
            div1.style.backgroundColor="transparent";

            strength.innerText="medium";
        }
        else if((value==4)&&(num.textContent>=7)&&(num.textContent<=10))
        {
            div4.style.backgroundColor="#00b800";
            div3.style.backgroundColor="#00b800";
            div2.style.backgroundColor="#00b800";
            div1.style.backgroundColor="#00b800";

            strength.innerText="strong";
        }
        else if((value==4)&&(num.textContent>=4)&&(num.textContent<=7))
        {

            div4.style.backgroundColor="yellow";
            div3.style.backgroundColor="yellow";
            div2.style.backgroundColor="yellow";
            div1.style.backgroundColor="transparent";

            strength.innerText="medium";
        }
        else 
        {
            div4.style.backgroundColor="orange";
            div3.style.backgroundColor="orange";
            div2.style.backgroundColor="transparent";
            div1.style.backgroundColor="transparent";

            strength.innerText="weak";
        }
    }
    else
    {
        alert("Please choose any one checkbox")
    }
}


// array shuffle function
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) 
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }


//  password copy 
function copyPassword() 
{
    navigator.clipboard.writeText(document.getElementById("password").innerText);
  }