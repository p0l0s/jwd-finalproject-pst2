class TaskManager {
    constructor(currentId)
    {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask (name, description, person, datepicker, status)
    {
        this.tasks.push({
            name,
            description,
            'assignedTo':person,
            'dueDate':datepicker,
            status,
            'id':this.currentId
        });
        this.currentId = this.currentId + 1;
    }

    }

    const task = new TaskManager(0);

let saveFile = () => {
    	
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
     // Reset fields
     document.getElementById('name').value="";
     document.getElementById('description').value="";
     document.getElementById('person').value="";
     document.getElementById('datepicker').value="";
    
    console.log(task.tasks);
    //document.getElementById('name').innerHTML="";
   }

   

    

    
    
    /*
    // This variable stores all the data.
    let data = 
        '\r Task Name: ' + name.value + ' \r\n ' + 
        'Task Description: ' + description.value + ' \r\n ' + 
        'Assigned Person: ' + person.value + ' \r\n ' + 
        'Due: ' + datepicker.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'taskManager.js';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
*/
}

