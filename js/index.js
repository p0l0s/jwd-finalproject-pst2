const saveTask = () => {
    	
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
    

    //Variables to check if date from datepicker is not in the past
    const convertedDatepicker = Date.parse(datepicker);
    const currentDate = new Date;
    const todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const convertedTodayDate = Date.parse(todayDate);

    
    //Checking if all fields are not empty
    if(!name||!description||!person||!datepicker)
    {
        document.getElementById("alertm").className = "alert alert-danger";
       
    document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please fill all fields!";
    }   
    //Checking if all fields don't contain only whitespaces
    else if (name.trim() == ""||description.trim() == ""||person.trim() == "")
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please don't use only whitespaces!";
    }
        //Checking if all fields don't contain only whitespaces
    else if (convertedDatepicker<convertedTodayDate)
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please assign correct date!";
        }
        //Checking if date from datepicker is not in the past
   else { 
    document.getElementById("alertm").className = "";
    document.getElementById("alertm").innerHTML="";

    //save task fields into this.tasks array in JSON format
    tasker.addTask(name, description, person, datepicker, status);

    //console.log(tasker.tasks);
    
    

     // Clear all fields
     document.getElementById('name').value="";
     document.getElementById('description').value="";
     document.getElementById('person').value="";
     document.getElementById('datepicker').value="";


     localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 

     

     tasker.render();
    //  //Showing a single string with HTML converted non-closed tasks after click on Add Task 
    //  document.getElementById("openTasks").innerHTML= tasker.openTasksHtml.join('\n');
    //  //Showing a single string with HTML converted closed tasks after click on Add Task 
    //  document.getElementById("closedTasks").innerHTML= tasker.closedTasksHtml.join('\n');
    

      

    
    
   }
  
  

}

// Function to change status of task
const changeStatus = (id) => {

// Find element of array with id of card to change status
for(let i=0; i<tasker.tasks.length; i++)
{
  if (tasker.tasks[i]['id'] === id)
  {
    tasker.tasks[i]['status'] = document.getElementById(id).value;
   
 break;
 
}


}
localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 
tasker.render();
// document.getElementById("openTasks").innerHTML= tasker.openTasksHtml.join('\n');
// document.getElementById("closedTasks").innerHTML= tasker.closedTasksHtml.join('\n');

  
  
  
}



// Function to delete task
 const deleteTask = (id) => {
  // Find element of array with id of card to delete
  for(let i=0; i<tasker.tasks.length; i++)
  {
    if (tasker.tasks[i]['id'] === id)
    {
      // Delete 1 element starting from id index
      tasker.tasks.splice(i, 1);
   break;
   
  }
  
  
  }
  localStorage.setItem("tasks", JSON.stringify(tasker.tasks)); 
  tasker.render();
  // document.getElementById("openTasks").innerHTML= tasker.openTasksHtml.join('\n');
  // document.getElementById("closedTasks").innerHTML= tasker.closedTasksHtml.join('\n');
      
   
 }

 const initialPage = () => {

  
    tasker.tasks = JSON.parse(localStorage.getItem('tasks'));
  
console.log(tasker.tasks);

 tasker.render();
//  document.getElementById("openTasks").innerHTML= tasker.openTasksHtml.join('\n');
//  document.getElementById("closedTasks").innerHTML= tasker.closedTasksHtml.join('\n');
 }










