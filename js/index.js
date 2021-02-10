const openTask = document.getElementById('openTask');
const addTaskButton = document.getElementById('addTaskButton');
const statusButton = document.getElementById('statusButton');
const deleteButton = document.getElementById('deleteButton');



const saveFile = () => {
    	
    // Get the data from each element on the form.
    const inputName = document.getElementById('name');
    const inputDescription = document.getElementById('description');
    const inputPerson = document.getElementById('person');
    const inputDatepicker = document.getElementById('datepicker');

    const name = inputName.value;
    const description = inputDescription.value;
    const person = inputPerson.value;
    const datepicker = inputDatepicker.value;
    
    const status = 'open';
    const convertedDatepicker = Date.parse(datepicker);
    const currentDate = new Date;
    const todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const convertedTodayDate = Date.parse(todayDate);

    
    
    if(!name||!description||!person||!datepicker)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please fill all fields!";
    }   
    else if (name.trim() == ""||description.trim() == ""||person.trim() == "")
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please don't use only whitespaces!";
    }
        
    else if (convertedDatepicker<convertedTodayDate)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please assign correct date!";
        }
   
    else { 
        document.getElementById("alertm").className = "";
        document.getElementById("alertm").innerHTML="";
    task.addTask(name, description, person, datepicker, status);

    console.log(task.tasks);
    
     // Reset fields
     document.getElementById('name').value="";
     document.getElementById('description').value="";
     document.getElementById('person').value="";
     document.getElementById('datepicker').value="";
   }
  
   const taskHtml = createTaskHtml(name, description, person, datepicker, status);
   console.log(taskHtml);

   /*document.getElementById("addTaskButton").addEventListener("click", function() {
    document.getElementById("openTasks").innerHTML= task.tasksHtml;
    }) */

   //call the render method
   document.getElementById("openTask").innerHTML= TaskManager.render;;
   //TaskManager.render;
   //console.log(TaskManager.render);
};

addTaskButton.addEventListener("click", saveFile);

