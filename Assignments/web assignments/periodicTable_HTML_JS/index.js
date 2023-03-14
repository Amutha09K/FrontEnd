
let positionArr=[18,13,13,4,4],eleArr=[1,4,12,90,104],parr=0;
let skyBlue=[0,5,6,7,8,14,15,16,33,34,52],skyBlueTxt=["H","C","N","O","F","P","S","Cl","Se","Br","I"],red=[2,10,18,36,54,72],redTxt=["Li","Na","K","Rb","Cs","Fr"];
let lightRed=[3,11,19,37,55,73],lightRedTxt=["Be","Mg","Ca","Sr","Ba","Ra"],lightGreen=[12,29,30,47,48,49,65,66,67,68,69,83],lightGreenTxt=["Al","Zn","Ga","Cd","In","Sn","Hg","Tl","Pb","Bi","Po","Cn"];
let yellow=[20,21,22,23,24,25,26,27,28,38,39,40,41,42,43,44,45,46,57,58,59,60,61,62,63,64,75,76,77,78,79],yellowTxt=["Sc","Ti","V","Cr","Mn","Fe","Ce","Ni","Cu","Y","Zr","Nb","Mo","To","Ru","Rh","Pd","Ag","Hf","Ta","W","Re","Os","Ir","Pt","Au","Rf","Db","Sg","Bh","Hs"];
let green=[4,13,31,32,50,51,70],greenTxt=["B","Si","Ge","As","Sb","Te","At"],ltRose=80,ltRoseTxt=["Mt","Ds","Rg","Nh","Fl","Mc","Lv","Ts","Og"];
let orange=104,orangeTxt=["Th","Pa","U","Np","N","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"],orangelt=90,ltOrangeTxt=["Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
let darkBlue=[1,9,17,35,53,71],darkBlueTxt=["He","Ne","Ar","Kr","Xe","Rn"];
for(numOfElement=0;numOfElement<118;numOfElement++)
{
    eleId="ele"+numOfElement
    // if(numOfElement>2)
    // {
        createElement(eleId)
    // }
}
function createElement()
{
    var createEle=document.createElement("element");
    document.getElementsByClassName("elementContainer")[0].appendChild(createEle).id=eleId;
    console.log(eleId)
    console.log("ele"+eleArr[parr])
    console.log(eleId==("ele"+eleArr[parr]))
    if(eleId==("ele"+eleArr[parr]))
    {
        document.getElementById(eleId).style.gridColumnStart=positionArr[parr]
        parr++;
    }
}

// skyBlue
for(i=0;i<skyBlue.length;i++)
{
    document.getElementById(("ele"+skyBlue[i])).style.backgroundColor="#48BFE9"
    document.getElementById(("ele"+skyBlue[i])).innerText=skyBlueTxt[i]
}
// Red
for(i=0;i<red.length;i++)
{
    document.getElementById(("ele"+red[i])).style.backgroundColor="#ff0600"
    document.getElementById(("ele"+red[i])).innerText=redTxt[i]
}
// light Red
for(i=0;i<lightRed.length;i++)
{
    document.getElementById(("ele"+lightRed[i])).style.backgroundColor="#ff605c"
    document.getElementById(("ele"+lightRed[i])).innerText=lightRedTxt[i]
}
// yellow
for(i=0;i<yellow.length;i++)
{
    document.getElementById(("ele"+yellow[i])).innerText=yellowTxt[i]
}
// light Green
for(i=0;i<lightGreen.length;i++)
{
    document.getElementById(("ele"+lightGreen[i])).style.backgroundColor="#11e321"
    document.getElementById(("ele"+lightGreen[i])).innerText=lightGreenTxt[i]
}
// green
for(i=0;i<green.length;i++)
{
    document.getElementById(("ele"+green[i])).style.backgroundColor="#00990c"
    document.getElementById(("ele"+green[i])).innerText=greenTxt[i]
}
// darkBlue
for(i=0;i<darkBlue.length;i++)
{
    document.getElementById(("ele"+darkBlue[i])).style.backgroundColor="#2e3eff"
    document.getElementById(("ele"+darkBlue[i])).innerText=darkBlueTxt[i]
}
//  light muted rose.
ltRoseIndex=0;
for(i=ltRose;i<90;i++)
{
    if(i!=83)
    {
        document.getElementById(("ele"+i)).style.backgroundColor="#7e54ff"
        document.getElementById(("ele"+i)).innerText=ltRoseTxt[ltRoseIndex]
        ltRoseIndex++
    }
}
// orange
let ltOrangeIndex=0
for(i=orangelt;i<=104;i++)
{
    document.getElementById(("ele"+i)).style.backgroundColor="#f59f00"
    document.getElementById(("ele"+i)).innerText=ltOrangeTxt[ltOrangeIndex]
    ltOrangeIndex++
}
document.getElementById(("ele56")).style.backgroundColor="#f59f00"
document.getElementById(("ele56")).innerText="La"
// orange
let orangeIndex=0
for(i=orange;i<=117;i++)
{
    document.getElementById(("ele"+i)).style.backgroundColor="#f57100"
    document.getElementById(("ele"+i)).innerText=orangeTxt[orangeIndex]
    orangeIndex++
}
document.getElementById(("ele74")).style.backgroundColor="#f57100"
document.getElementById(("ele74")).innerText="Ac"
