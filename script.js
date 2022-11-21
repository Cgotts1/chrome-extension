let myLeads = ["blah", "scoop", "roop"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el")


let btnClicked = ()=>{        
  myLeads.push(inputEl.value)  // get value from text into array
  console.log(myLeads)
}

inputBtn.addEventListener("click", btnClicked)

let listItems = " ";

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"   //Turns it to li list
}

ulEl.innerHTML +=  listItems      //put it outside of the loop so it renders 1 time