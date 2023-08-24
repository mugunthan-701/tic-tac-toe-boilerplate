var box=document.getElementsByClassName("box")
let text="O"
var result =document.getElementById("result")
var button =document.getElementById("button")
var message=document.getElementById("message")
let count=0
for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",handleClick,)
}
function handleClick(event){
    if(!event.target.innerText){
        count++
        text=text=="O"?"X":"O"
        event.target.innerHTML=`<h2>${text}</h2>`
    }
    checkresult()
  
}

function checkresult(){
    if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX"||
    box[3].innerText+box[4].innerText+box[5].innerText=="XXX" ||
    box[6].innerText+box[7].innerText+box[8].innerText=="XXX" ||
    box[0].innerText+box[3].innerText+box[6].innerText=="XXX"||
    box[1].innerText+box[4].innerText+box[7].innerText=="XXX"||
    box[2].innerText+box[5].innerText+box[8].innerText=="XXX"||
    box[0].innerText+box[4].innerText+box[8].innerText=="XXX"||
    box[2].innerText+box[4].innerText+box[6].innerText=="XXX" )    {
console.log("X won the match")
showresult('X Won!')
    }
    else if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX"||
    box[3].innerText+box[4].innerText+box[5].innerText=="OOO" ||
    box[6].innerText+box[7].innerText+box[8].innerText=="OOO" ||
    box[0].innerText+box[3].innerText+box[6].innerText=="OOO"||
    box[1].innerText+box[4].innerText+box[7].innerText=="OOO"||
    box[2].innerText+box[5].innerText+box[8].innerText=="OOO"||
    box[0].innerText+box[4].innerText+box[8].innerText=="OOO"||
    box[2].innerText+box[4].innerText+box[6].innerText=="OOO"){
console.log("O won the match")
showresult('O Won!')
    }
     else if(count>=9){
        showresult("Draw")
    }
}
function showresult(char){
    message.innerText=`${char}`
    result.style.visibility="visible"
}
button.onclick =()=>{
location.reload()
}