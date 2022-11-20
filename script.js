let inputBtn = document.querySelector("#input-btn")

// inputBtn.addEventListener("click", btnClicked)

// function btnClicked(){
//     console.log("Button clicked!")
// }

let btnClicked = ()=>{                   //with arrow() need to addevent listener below or it doesnt work
  console.log("Button clicked!")
}
inputBtn.addEventListener("click", btnClicked)
