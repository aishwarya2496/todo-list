let inputField= document.getElementById("additem");
let totalItems=0;
inputField.focus();
let todolist = document.getElementById("list");
let addButton = document.getElementById("add");

// to add an element when enter key is pressed i.e enter=13
inputField.onkeyup=function(event){
  // let inputField = document.getElementById("additem");
  // let rawInput = inputField.value;
  // let userIn = rawInput.trimLeft();
  // let todolist = document.getElementById("list");
  if(event.which==13){
   enterPressed();
  }
}


// when add button is clicked.
function enterPressed() {
  let inputField = document.getElementById("additem");
  let rawInput = inputField.value;
  let userIn = rawInput.trimLeft();  
  if (userIn == ""){
    alert("please enter data");
  }
 else{
  createDiv(document.getElementById("list"), userIn)
   document.getElementById("additem").value = "";
 }
}


     
function createDiv(todolist, userIn){
  
  var date = new Date();
  var id = ""+ date.getHours()+date.getMinutes()+ date.getSeconds()+date.getMilliseconds();
  // console.log(id);
  let listItem= document.createElement("li");
  listItem.id= "list"+ id;
  listItem.className="item"
  // listItem.innerHTML= userIn;
  let checkBox= document.createElement("input");
  checkBox.class="done";
  checkBox.type="checkBox";
  checkBox.id= "cb_" + id;
  let label = document.createElement("label");
  label.htmlFor = "cb_" + id;
  label.innerHTML = '<img class="checkImage" src="assets/check.png">';
  label.className="doneLabel";
   console.log({label});
  label.onclick= updateItemStatus;

  let span= document.createElement("span");
  span.innerHTML=userIn;
  span.id= "item" + id;
  let crossBox= document.createElement("button");
  crossBox.innerHTML= "X" ;
  crossBox.id="cross"+ id;
  //  console.log(crossBox.id);
  crossBox.className="crossed";
  crossBox.onclick = remove;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(span);
  listItem.appendChild(crossBox);
  //  console.log({listItem, checkBox});
  todolist.appendChild(listItem);
}


function remove() {
  let cbid = this.id.replace("cross", "");
  console.log(cbid);
  let list = document.getElementById( "list"+cbid);
  console.log(list);
  let todolist= document.getElementById("list");
  console.log({list});
  todolist.removeChild(list);
}

 function updateItemStatus()
 {
   console.log('Update function called')
  let cbid= this.htmlFor.replace("cb_", "");
  // console.log({cbid});
  let span = document.getElementById("item" + cbid);
  let checkBox = document.getElementById("cb_" + cbid);
  console.log(checkBox.checked);
  if(!checkBox.checked){
    span.className = "checked";
  }
  else{
    span.className = "" ;
  }
}