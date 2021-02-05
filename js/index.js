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
    task.addTask(name, description, person, datepicker, status);

    //console.log(task.tasks);
    
    

     // Clear all fields
     document.getElementById('name').value="";
     document.getElementById('description').value="";
     document.getElementById('person').value="";
     document.getElementById('datepicker').value="";
     document.getElementById("openTasks").innerHTML= task.render();

     //Showing a single string with HTML converted tasks after click on Add Task button 

      document.getElementById("addTaskButton").addEventListener("click", function() {
      document.getElementById("openTasks").innerHTML= task.render();
    }); 
    
    
   }
  
  

}











