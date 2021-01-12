// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');


//load all event listeners 


loadEventListeners();

//load all event listeners 

function loadEventListeners(){

    //DOM lead event

    document.addEventListener('DOMContentLoaded', getTasks);

    //add task event
    form.addEventListener('submit', addTask);

    //remove task event 
    taskList.addEventListener('click', removeTask);

    //clear task event 

    clearBtn.addEventListener('click',clearTasks);

    //filter task event
    filter.addEventListener('keyup', filterTasks);
 
}


//get taks from LS

function getTasks(){ 
    let tasks;

    if(localStorage.getItem('tasks')=== null){

        tasks =[];
    }
    else{
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
      // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}


//add task
function addTask(e){
if(taskinput.value === ''){

    alert('Add a Task');
} 


//create li element
const li = document.createElement('li');
//add class
li.className = 'collection-item';

//create text node and append to li
li.appendChild(document.createTextNode(taskinput.value));

//create new link element 
const link = document.createElement('a');

//add class
link.className = 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append the link to li
li.appendChild(link);


//append li to ul
taskList.appendChild(li);

//store to LS
storeTaskInLocalStorage(taskinput.value);

//clear input

taskinput.value ='';
 

    e.preventDefault();
}

//store task 
 
function storeTaskInLocalStorage(task){

    let tasks;

    if(localStorage.getItem('tasks')=== null){

        tasks =[];
    }
    else{
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));


}

//remove task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){

        if(confirm('Are You Sure?')){ 
        e.target.parentElement.parentElement.remove();


        // remove from ls

        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    }
}

//FUNCTION













//Remove from LS

function removeTaskFromLocalStorage(taskItem){
    let tasks;

    if(localStorage.getItem('tasks')=== null){

        tasks =[];
    }
    else{
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }


    tasks.forEach(function(task, index){

        if(taskItem.textContent === task){

            tasks.splice(index, 1);
        }

    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}



//clear tasks 



function clearTasks(){

    // taskList.innerHTML = '';

    //faster 

    while(taskList.firstChild){

        taskList.removeChild(taskList.firstChild);
    }

    //Clear from LS

    clearTasksFromLocalStorages();
}


//Clear tasks from LS

function clearTasksFromLocalStorages(){

    localStorage.clear();
}

//filter tasks


function filterTasks(e){
const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach 
(function(task){

    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){

        task.style.display = 'block';
    }
    else{
        task.style.display = 'none';
    }
    });


}




























