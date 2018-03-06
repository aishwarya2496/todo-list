let inputField= document.getElementById("additem");
let totalItems=0;
inputField.focus();
let todolist = document.getElementById("list");
// let userIn = inputField.value ;
let addButton = document.getElementById("add");
// let remButton = document.getElementById("remove");
// var list = document.getElementById("list");
// console.log("list");



// to add an element when enter key is pressed i.e enter=13
inputField.onkeyup=function(event){
  let inputField = document.getElementById("additem");
  // inputField.focus();
  let userIn = inputField.value;
  let todolist = document.getElementById("list");
  if(event.which==13){
   keypress();

  }

}

// when add button is clicked.
addButton.onclick= keypress;

function keypress() {
  let inputField = document.getElementById("additem");
  let userIn = inputField.value;     
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
//  console.log(id);
  let listItem= document.createElement("li");
  listItem.id= "list"+ id;
  listItem.className="item"
  // listItem.innerHTML= userIn;
  let checkBox= document.createElement("input");
  checkBox.class="done";
  checkBox.type="checkBox";
  checkBox.id= "cb_" + id;

  checkBox.onclick= updateItemStatus;

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
  listItem.appendChild(span);
  listItem.appendChild(crossBox);
  //  console.log({listItem, checkBox});
  todolist.appendChild(listItem);
}


function remove() {
  //  console.log(event);
   
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
   let cbid= this.id.replace("cb_", "");
    // console.log({cbid});
    let item = document.getElementById("item" + cbid);
  
   if(this.checked){
     item.className = "checked";
     }
   else{
     item.className = "" ;
       }
       //  if(this.checked){
  //  item.style.textDecoration = "line-through";}
  //  else{
  //    item.style.textDecoration="none";
  //  }

   
  }

   
  //  alert("clicked");

   
   
 





//  remButton.onclick =function() {
   
  
//   alert("button clicked");
//   let parent= document.getElementById("list");
//   let child=parent.getElementById("additem").value;
//   var removed= parent.removeChild(child);
//  }

