let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))



    if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
  }
  

  function renderLeads() {
    let listItems = " ";
  
    for (let i = 0; i < myLeads.length; i++) {
      // listItems = "<li><a target ='_blank' href = '#'>" + myLeads[i] + "</a></li>"   //Turns it to li list   chaning += to just =
      listItems += `   
      <li>
       <a target ='_blank' href = "${myLeads[i]}">
        ${myLeads[i]}
        </a>
       </li>
       `; //Turns it to li list   chaning += to just =
    }
    ulEl.innerHTML += listItems;
  } //put it outside of the loop so it renders 1 time




const deleteAll = ()=>{
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = ""
}

deleteBtn.addEventListener("dblclick", deleteAll)


let btnClicked = () => {
  myLeads.push(inputEl.value); // get value from text into array
  console.log(myLeads);
  inputEl.value = " "; //Clears input field

localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Turns stringS
  renderLeads();
  // console.log(localStorage.getItem("myLeads"))
};

inputBtn.addEventListener("click", btnClicked);