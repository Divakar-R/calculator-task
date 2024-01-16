let display = document.getElementById("display")

let inputs = document.getElementsByClassName("inputs")
let inputEvent = (e) => {
    display.value += e.target.value 
}

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("click",inputEvent)
}


let equal = document.getElementById("equal")
equal.addEventListener("click",(e) =>{
    display.value = eval(display.value)
})



let clear = document.getElementById("clear");
clear.addEventListener("click",(e) => {
    display.value = "";
})


let del = document.getElementById("del");
del.addEventListener("click",(e)=>{
    display.value = display.value.slice(0, -1);
})
