
//add task
const newTask =document.getElementById('newTask');
const tasksList= document.getElementById('tasks');
const addButton= document.getElementById('addBtn');

addButton.addEventListener('click',function(){
    if(newTask.value.trim()!=""){
        const task = document.createElement("li");
        task.textContent=newTask.value;
        tasksList.append(task);
        newTask.value="";
    }
})
newTask.addEventListener('keypress',function(e){
    if(e.key=='Enter'&& newTask.value.trim()!=""){
       const task = document.createElement("li");
       task.textContent=newTask.value;
       tasksList.append(task);
       newTask.value="";
    }
})
