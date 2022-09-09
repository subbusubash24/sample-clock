var smallBar=document.querySelector(".small-bar-holder")
// console.log(smallBar);
var largeBar=document.querySelector(".large-bar-holder")
// console.log(largeBar);
var dial=document.querySelector(".dial")
console.log(".dial")
let angle=6


for(i=0;i<=30;i++){
    angle=angle+6

var newBar=document.createElement("div")


if(i%5==0){
newBar.setAttribute("class","large-bar-holder")
newBar.innerHTML=largeBar.innerHTML
newBar.style.transform= "rotate("+angle+"deg)"
dial.appendChild=(newBar)
}else{
    newBar.setAttribute("class","small-bar-holder")
newBar.innerHTML=smallBar.innerHTML
newBar.style.transform= "rotate("+angle+"deg)"
dial.appendChild=(newBar)


}
}