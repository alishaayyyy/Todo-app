var ul = document.getElementById("ul");
var newTask = document.getElementById("newTask");

// function addItem (){
// console.log("Hello")}

// function addItem (){
//   console.log(newTask.value)
//   }

// add items functiom
function addItem (){
  if(newTask.value===""){
    alert("Please Enter your task");
    
  }
  else{
    // Console.log(newTask.value);
    var li = document.createElement("li");
    var liText = document.createTextNode(newTask.value);
    // styling button
    li.setAttribute("class", "Task")    
                    // again continue
    li.appendChild(liText);


    
    // now delete button for delete line or edit line
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "editTask(this)") 
    li.appendChild(editBtn)

    // line remover
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick", "delTask(this)") 
    li.appendChild(delBtn)


    ul.appendChild(li);
    //newText.Value="";

    }
  }


  // now delete all 

  function deleteAll(){
    ul.innerHTML="";
  }

  // li new twxt change or edit 
  function editTask(editBtn){
    // console.log(editBtn.parentNode.firstChild.nodeValue);
    var oldVal =  console.log(editBtn.parentNode.firstChild.nodeValue);
    var newVal = prompt ('Edit Task' , oldVal);
    console.log(newVal);
    editBtn.parentNode.firstChild.nodeValue = newVal;
  }

  // 
  function delTask(delBtn){
    delBtn.parentNode.remove();

  }





