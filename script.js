
const newTask =document.getElementById('newTask');
const tasksList= document.getElementById('tasks');
const addButton= document.getElementById('addBtn');

function addTask(){ 
    if(newTask.value.trim()!=""){
         const task = document.createElement("li");
          task.textContent=newTask.value;
 
           const checkBox =document.createElement("input");
           checkBox.type="checkbox";
           checkBox.className="done";
           task.append(checkBox);

           const deleteButton =document.createElement("button");
           deleteButton.textContent= 'delete';
           deleteButton.className= 'deleteBtn';
           task.append(deleteButton);
           
           tasksList.append(task); 
           newTask.value="";
         } 
        } 
addButton.addEventListener('click',addTask)
newTask.addEventListener('keypress',function(e){
     if(e.key=='Enter'){ addTask() 

     } 
    })
