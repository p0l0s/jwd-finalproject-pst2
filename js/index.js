// Function to add a new task to the screen and update JSON file in 'localStorage'
// It gets current status of task as a parameter. We need this, because we use this function to update tasks too.
const saveTask = (currentStatus) => {
    	
    // Gets the data from each field of the form
    const inputName = document.getElementById('name');
    const inputDescription = document.getElementById('description');
    const inputPerson = document.getElementById('person');
    const inputDatepicker = document.getElementById('datepicker');
   
    // Saves the data from each field to variables
    const name = inputName.value;
    const description = inputDescription.value;
    const person = inputPerson.value;
    const datepicker = inputDatepicker.value;
    // Saves current status of task. For new tasks we call 'saveTask('open').
    const status = currentStatus;
        
    // Variables to check if date from datepicker is not in the past
    const convertedDatepicker = Date.parse(datepicker);
    const currentDate = new Date;
    const todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const convertedTodayDate = Date.parse(todayDate);
    
    // Checks if there is no empty field in the form. Shows an alert message if no
    if(!name||!description||!person||!datepicker)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please fill all fields!";
    }  

    // Checks if there is no field in the form containing only whitespaces
    else if (name.trim() == ""||description.trim() == ""||person.trim() == "")
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please don't use only whitespaces!";
    }
        
    // Checks if the date from datepicker is not in the past
    else if (convertedDatepicker<convertedTodayDate)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please assign correct date!";
    }
        
    // If all is ok does next steps
    else 
    { 
        document.getElementById("alertm").className = "";
        document.getElementById("alertm").innerHTML="";

        // Saves task fields into this.tasks array in JSON format (call 'addTask' method for 'tasker' object of 'TaskManager' class)
        tasker.addTask(name, description, person, datepicker, status);

        // Clears all fields in the form
        document.getElementById('name').value="";
        document.getElementById('description').value="";
        document.getElementById('person').value="";
        document.getElementById('datepicker').value="";

        // Changes text on button (if it was called inside of 'updateTask' function)
        document.getElementById('addTaskButton').innerHTML="Save Task";

        // Adds 'this.tasks' array in JSON format to 'localStorage'  (updates cuurent JSON file)
        localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 
   
        // Shows tasks on the screen (calls 'render' method for 'tasker' object of 'TaskManager' class)
        tasker.render(); 
    }
}

// Function to change the status of task, gets id of task as a parameter to define what task should be changed
const changeStatus = (id) => {

    // Finds element of tasks array with required id to change status
    // Iterates over each task in this.tasks array
    for(let i=0; i<tasker.tasks.length; i++)
    {
        if (tasker.tasks[i]['id'] === id)
        {
        // Changes the status of task
        tasker.tasks[i]['status'] = document.getElementById(id).value;
        break;
         }
    }
    // Adds 'this.tasks' array in JSON format to 'localStorage' (updates current JSON file)
    localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

    // Shows tasks on the screen (call 'render' method for 'tasker' object of 'TaskManager' class)
    tasker.render();
}

// Function to delete the task, gets id of task as parameter to define what task should be deleted
 const deleteTask = (id) => {
    // Finds element of tasks array with required id to delete
    // Iterates over each task in this.tasks array
    for(let i=0; i<tasker.tasks.length; i++)
    {
        if (tasker.tasks[i]['id'] === id)
            {
            // Delete 1 element of tasks array starting from 'id' index
            tasker.tasks.splice(i, 1);
            break;
            }
    }
    // Adds this.tasks array in JSON format to 'localStorage' (updates current JSON file)
    localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

    // Shows tasks on the screen (calls 'render' method for 'tasker' object of 'TaskManager' class)
    tasker.render();
}

// Function to read JSON file from 'localStorage' and show tasks on the screen after a page refresh or on a new start
const initialPage = () => {

    // Sets 'temporaryId' to 0. We will need it when looking for task with max id
    let temporaryId = 0;

    // Puts information from JSON file to the array 
    let tasksdata = JSON.parse(localStorage.getItem('tasks'));
    
    // Checks the array. If it didn't exist, there will be null. 
    // If it existed, but all tasks were deleted, there will be an empty array.)
    // If it is not empty, saves the readen array to 'tasker.task. 
    // If both conditions not true, assigns 'tasker.tasks' to be an empty array.
    if(tasksdata!==null&&tasksdata.length!== 0)
    {
        tasker.tasks=tasksdata;
    
        // Searches for max existing id among tasks in the array. We need its value to get unique id (max id + 1 and go on) for new tasks
        // Iterates over each task in 'this.tasks' array
        for(let i=0; i<tasker.tasks.length; i++)
        {
            temporaryId = Math.max(temporaryId, tasker.tasks[i]['id']);
        }
        // Creates a new unique id for future new task
        tasker.currentId = temporaryId + 1;
    } 
    else 
    {
        // If there were not any tasks it downloads demo tasks from 'firstTasks'
         tasker.tasks=firstTasks;
        // Searches for max existing id among tasks in the array. We need its value to get unique id (max id + 1 and go on) for new tasks
        // Iterates over each task in 'this.tasks' array
         for(let i=0; i<tasker.tasks.length; i++)
         {
             temporaryId = Math.max(temporaryId, tasker.tasks[i]['id']);
         }
         // Creates a new unique id for future new task
         tasker.currentId = temporaryId + 1;
    }

    // Adds this.tasks array in JSON format to 'localStorage' (updates current JSON file)
    localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

    // Shows tasks on the screen (calls 'render' method for 'tasker' object of 'TaskManager' class)
    tasker.render();
}

// Function to edit an existing task, gets id of task as parameter to define what task should be edited
const editTask = (id) => {
    // The variable to keep a current id of edited task
    let currentStatus;

    // Changes text on 'Save Task' button
    document.getElementById('addTaskButton').innerHTML="Update Task";
    
    // Finds element of tasks array with required id to update
    // Iterates over each task in this.tasks array
    for(let i=0; i<tasker.tasks.length; i++)
    {
        if (tasker.tasks[i]['id'] === id)
            {
                // Puts the task fields to the form fields
                document.getElementById('name').value=tasker.tasks[i]['name'];
                document.getElementById('description').value=tasker.tasks[i]['description'];
                document.getElementById('person').value=tasker.tasks[i]['assignedTo'];
                document.getElementById('datepicker').value=tasker.tasks[i]['dueDate'];
                // Saves current task status to the variable 'currentStatus'
                currentStatus = tasker.tasks[i]['status'];
                // Saves 'id' of edited task to  the variable of 'tasker' object of 'TaskManager' class.
                // We will need it because, we will call 'saveTask' function to save the edited task       
                tasker.editedId = tasker.tasks[i]['id'];
                break;
            }              
    }
    
    // Checks the status of edited task and depends of it passes the corresponding argument to 'saveTask()' function
    if (currentStatus==='closed')
    {
        document.getElementById('addTaskButton').setAttribute("onClick", "saveTask('closed')" );  
    } else if (currentStatus==='pending')
    {
        document.getElementById('addTaskButton').setAttribute("onClick", "saveTask('pending')" );  
    } else if (currentStatus==='inprogress')
    {
        document.getElementById('addTaskButton').setAttribute("onClick", "saveTask('inprogress')" );  
    }
}

// Demo tasks
const firstTasks = [
{ name:"Empty the kitty litter" , description:"It is starting to really pile up and smell." , assignedTo: "Tetiana \"Cat\" Chorna" , dueDate:"02/20/2021" , status:"inprogress" , id: 0 }, 
{ name:"Train the Cat to Chase Mice" , description:"Use Tom and Jerry training videos if you need to." , assignedTo: "Jenna \"Jaguar\" Sosa" , dueDate:"02/23/2021" , status:"pending" , id: 1 },
{ name:"Name the Kitten" , description:"Give it an adorable name, like Fido.", assignedTo: "Kathryn \"WildCat\" Williams" , dueDate:"02/20/2021 " , status:"closed" , "id": 2 },
{ name:"Take the cat for a walk" , description:"Cats love to be on a leash. If not, bandaids are in the bathroom.", assignedTo: "Yared \"Ocelot\" Nigatu", dueDate:"02/20/2021" , status:"open" , id: 3 }, 
{ name:"Fill Cat Task Lists with Fake Tasks" , description:"Try to think of something funny and cat themed.", assignedTo: "Michael \"Maine Coon\" Simms", dueDate:"02/20/2021" , status:"closed" , id: 4 } 
];


