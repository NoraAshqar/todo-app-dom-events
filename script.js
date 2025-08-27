
const newTask =document.getElementById('newTask');
const tasksList= document.getElementById('tasks');
const addButton= document.getElementById('addBtn');

document.addEventListener("DOMContentLoaded",loadTasks);
function addTask(taskStrg){ 
    const taskT= taskStrg||newTask.value.trim();
    if(taskT!=""){
         const task= document.createElement("li");
          task.textContent=taskT;
 
           const checkBox =document.createElement("input");
           checkBox.type="checkbox";
           checkBox.className="done";
           task.append(checkBox);

           const deleteButton =document.createElement("button");
           deleteButton.textContent= 'delete';
           deleteButton.className= 'deleteBtn';
           task.append(deleteButton);

           tasksList.append(task); 
           
           if (!taskStrg) {
            saveTask(taskT);}
           newTask.value="";
    } 
} 
addButton.addEventListener('click',()=>addTask())
newTask.addEventListener('keypress',function(e){
     if(e.key=='Enter'){ 
        addTask() 
     } 
 })

tasksList.addEventListener('click',function(e){
   
    if(e.target.classList.contains('done'))
    {
        e.target.parentElement.classList.toggle('complete')
    }
    if(e.target.classList.contains('deleteBtn'))
    {
        const text =e.target.parentElement.firstChild.textContent;
        removeTask(text);
        e.target.parentElement.remove();
    }
}) 

function saveTask(task) {
    const stored = localStorage.getItem("tasks");
    const parsed = JSON.parse(stored) || [];
    parsed.push(task);
    const listToStore = JSON.stringify(parsed);
    localStorage.setItem("tasks", listToStore);
}

function removeTask(task){
    const stored=localStorage.getItem("tasks");
    const parsed =JSON.parse(stored)||[];
    const filtered =parsed.filter(t=>t!==task);
    const listToStore= JSON.stringify(filtered);
    localStorage.setItem("tasks",listToStore);

}
function loadTasks() {
    const stored = localStorage.getItem("tasks");
    const parsed = JSON.parse(stored) || [];
    parsed.forEach(task => {
        addTask(task);
    });
}
