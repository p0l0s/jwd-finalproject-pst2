// Function to add a new task to the screen and update JSON file in 'localStorage'
const saveTask = (currentStatus) => {
    	
    // Get the data from each field of the form
    const inputName = document.getElementById('name');
    const inputDescription = document.getElementById('description');
    const inputPerson = document.getElementById('person');
    const inputDatepicker = document.getElementById('datepicker');
   
    // Save the data from each field to variables
    const name = inputName.value;
    const description = inputDescription.value;
    const person = inputPerson.value;
    const datepicker = inputDatepicker.value;
    // Initial status for all new tasks is 'open'
    const status = currentStatus;
        
    // Variables to check if date from datepicker is not in the past
    const convertedDatepicker = Date.parse(datepicker);
    const currentDate = new Date;
    const todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const convertedTodayDate = Date.parse(todayDate);
    
    // Check if there is no empty field in the form. Show alert message if no
    if(!name||!description||!person||!datepicker)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please fill all fields!";
    }  

    // Check if there is no field in the form contains only whitespaces
    else if (name.trim() == ""||description.trim() == ""||person.trim() == "")
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please don't use only whitespaces!";
    }
        
    // Check if date from datepicker is not in the past
    else if (convertedDatepicker<convertedTodayDate)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please assign correct date!";
    }
        
    // If all is ok do next steps
    else 
    { 
        document.getElementById("alertm").className = "";
        document.getElementById("alertm").innerHTML="";

        // Save task fields into this.tasks array in JSON format (call 'addTask' method for 'tasker' object of 'TaskManager' class)
        tasker.addTask(name, description, person, datepicker, status);

        // Clear all fields in the form
        document.getElementById('name').value="";
        document.getElementById('description').value="";
        document.getElementById('person').value="";
        document.getElementById('datepicker').value="";

        // Change text on button (need after updateTask)
        
        document.getElementById('addTaskButton').innerHTML="Save Task";

        // Add this.tasks array in JSON format to 'localStorage'  (update cuurent JSON file)
        localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 
   
        // Show tasks on the screen (call 'render' method for 'tasker' object of 'TaskManager' class)
        tasker.render(); 
    }
}

// Function to change the status of task, gets id of task as parameter to define what task should be changed
const changeStatus = (id) => {

    // Find element of tasks array with required id to change status
    // Iterating over each task in this.tasks array
    for(let i=0; i<tasker.tasks.length; i++)
    {
        if (tasker.tasks[i]['id'] === id)
        {
        // Change the status of task
        tasker.tasks[i]['status'] = document.getElementById(id).value;
        break;
         }
    }
    // Add this.tasks array in JSON format to 'localStorage' (update cuurent JSON file)
    localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

    // Show tasks on the screen (call 'render' method for 'tasker' object of 'TaskManager' class)
    tasker.render();
}

// Function to delete the task, gets id of task as parameter to define what task should be deleted
 const deleteTask = (id) => {
    // Find element of tasks array with required id to delete
    // Iterating over each task in this.tasks array
    for(let i=0; i<tasker.tasks.length; i++)
    {
        if (tasker.tasks[i]['id'] === id)
            {
            // Delete 1 element of tasks array starting from id index
            tasker.tasks.splice(i, 1);
            break;
            }
    }
    // Add this.tasks array in JSON format to 'localStorage' (update cuurent JSON file)
    localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

    // Show tasks on the screen (call 'render' method for 'tasker' object of 'TaskManager' class)
    tasker.render();
}

// Function to read JSON file from 'localStorage' and show tasks on the screen after a page refresh or on a new start
const initialPage = () => {
    let temporaryId = 0;
    // Put information from JSON file to the array 
    let tasksdata = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasksdata);
    // Check if array is not null. If it is not null, save read array to 'tasker.task. If it is null, leave 'tasker.tasks' as empty array
    if(tasksdata.length!== 0)
    {
        tasker.tasks=tasksdata;
        // Search for max existing id of tasks in the array. We need its value to add unique id (max id + 1 and go on) for new tasks
        // Iterating over each task in this.tasks array

        for(let i=0; i<tasker.tasks.length; i++)
        {
            temporaryId = Math.max(temporaryId, tasker.tasks[i]['id']);
        }
        // Create a new unique id for future new task
        tasker.currentId = temporaryId + 1;
        
    }

    

    // Show tasks on the screen (call 'render' method for 'tasker' object of 'TaskManager' class)
    tasker.render();
}


const editTask = (id) => {

    let currentStatus;

    // Change text on 'Save Task' button
    document.getElementById('addTaskButton').innerHTML="Update Task";
    
    // Find element of tasks array with required id to delete
    // Iterating over each task in this.tasks array
    for(let i=0; i<tasker.tasks.length; i++)
    {
        if (tasker.tasks[i]['id'] === id)
            {
            // Put the task fields to the form fields
            document.getElementById('name').value=tasker.tasks[i]['name'];
            document.getElementById('description').value=tasker.tasks[i]['description'];
            document.getElementById('person').value=tasker.tasks[i]['assignedTo'];
           
            document.getElementById('datepicker').value=tasker.tasks[i]['dueDate'];
            currentStatus = tasker.tasks[i]['status'];
           //deleteTask(tasker.tasks[i]['id']);
            
            tasker.editedId = tasker.tasks[i]['id'];
            
            break;
            }
           
              
    }
    
    // Change text on 'Save Task' button
    //document.getElementById('addTaskButton').innerHTML="Add Task";

    
    let a =0;
    console.log(a);
    a = document.getElementById('addTaskButton').onclick;
    console.log(a);
    if (currentStatus==='closed')
    {
    document.getElementById('addTaskButton').setAttribute("onClick", "saveTask('closed')" );  
    } else
    if (currentStatus==='pending')
    {
    document.getElementById('addTaskButton').setAttribute("onClick", "saveTask('pending')" );  
    } else
    if (currentStatus==='inprogress')
    {
    document.getElementById('addTaskButton').setAttribute("onClick", "saveTask('inprogress')" );  
    }
    a = document.getElementById('addTaskButton').onclick;
    console.log(a);
    
    

    
    // Add this.tasks array in JSON format to 'localStorage' (update cuurent JSON file)
    //localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

    // Show tasks on the screen (call 'render' method for 'tasker' object of 'TaskManager' class)
    //tasker.render();
}

//pre-populate the initial page with a handful of tasks. 
const firstTasks = '{ "tasks" : [' +
'{ "name":"Empty the kitty litter" , "description":"It is starting to really pile up and smell" , "assignedTo": "Tetiana \"Cat\" Chorna" , "dueDate":"02/20/2021" , "status":"In Progress" , "id": "0" },' +
'{ "name":"Train the Cat to Chase Mice" , "description":"Use Tom and Jerry training videos if you need to" , "assignedTo": "Jenna \"Jaguar\" Sosa" , "dueDate":"02/23/2021" , "status":"Pending" , "id": "1" },' +
'{ "name":"Name the Kitten" , "description":"Give it an adorable name, like Fido", "assignedTo": "Kathryn \"WildCat\" Williams" , "dueDate":"02/20/2021 " , "status":"Closed" , "id": "2" },' +
'{ "name":"Take the cat for a walk" , "description":"Cats love to be on a leash. If not, bandaids are in the bathroom.", "assignedTo": "Yared \"Ocelot\" Nigatu" "dueDate":"02/20/2021" , "status":"Open" , "id": "3" },' +
'{ "name":"Fill Cat Task Lists with Fake Tasks" , "description":"Try to think of something funny and cat themed.", "assignedTo": "Michael \"Maine Coon\" Simms" "dueDate":"02/20/2021" , "status":"Closed" , "id": "4" } ]}'; 


