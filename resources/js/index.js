/*const newTaskNameInput = document.querySelector('#newTaskNameInput');
const name = newTaskNameInput.value;*/

const form = document.querySelector('#taskForm');

const taskName = document.querySelector('#taskName');
const taskNameValue = taskName.value;

const taskDescription = document.querySelector('#taskDescription');
const taskDescriptionValue = taskDescription.value;

const assignTo = document.querySelector('#assignTo');
const assignToValue = assignTo.value;

const datePicker = document.querySelector('#datepicker');
const datePickerValue = datePicker.value;

const submitButton = document.querySelector('#submit-button');
const submitButtonValue = submitButton.value;

//initializing the TaskManager()

const task = new TaskManager(0);


//variables used for second validation method. 
const name1 = document.getElementById('taskName');
const description = document.getElementById('taskDescription');
const assign = document.getElementById('assignTo');
const datepick = document.getElementById('datepicker');
const taskForm = document.getElementById('taskForm');
const error = document.getElementById('formError');
const validationMessage = document.getElementById('valdiationMessage');

//Used for checking for the date is in the past. 
const convertedDatepicker = Date.parse(datePickerValue);
const currentDate = new Date;
const todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
const convertedTodayDate = Date.parse(todayDate);


//Ended up Using this method: https://www.youtube.com/watch?v=In0nB0ABaUk&t=271s 

//Log Values into console after hitting submit button. Listener in html

function logValue (){
    console.log(' ');
    console.log("Name:  " + name1.value);
    console.log("Description:  " + description.value);
    console.log("Assigned To:  " + assign.value);
    console.log("Due By:  " + datePicker.value);
}


taskForm.addEventListener('submit', (e) => {
    let errorMessage = []
    
    if (name1.value === '' || name1.value == null || name1.value.trim() == '') {
        errorMessage.push('Please fill out Task Name.')
    }

    if (description.value === '' || description.value == null || description.value.trim() == '') {
        errorMessage.push('Please Fill Out Description.')
    }

    if (assign.value === '' || assign.value == null) {
        errorMessage.push('Please assign a Cat Sitter.')
    }

    if (datePicker.value === '' || datePicker.value == null) {
        errorMessage.push('Please set a Due Date.')
    }

    /* Tanya had created a check to see if the date was in the past. 
    if (convertedDatepicker < convertedTodayDate){
        console.log(convertedDatepicker);
        console.log(convertedTodayDate);
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please assign correct date!";
    }
    */

    if (errorMessage.length > 0) {
        e.preventDefault()
        let error = "<strong>Error!</strong> " + errorMessage.join(' ') + ' You Silly Goose.'
        document.getElementById("alertm").className = "alert alert-danger";
        //error.innerText = errorMessage.join(' ') + ' You Silly Goose.'
        document.getElementById("alertm").innerHTML = error;
    }
    
    if (errorMessage.length === 0) {
        logValue();
        console.log(task.tasks); 
        }
})








/*
//Tanya's solution to validation challenge:

let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const person = document.getElementById('person');
    const datepicker = document.getElementById('datepicker');
    const convertedDatepicker = Date.parse(datepicker.value);
    const currentDate = new Date;
    const todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const convertedTodayDate = Date.parse(todayDate);

    
    if(!name.value||!description.value||!person.value||!datepicker.value)
    {
        document.getElementById("alertm").className = "alert alert-danger";
       
    document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please fill all fields!";
}
    else if (name.value.trim() == ""||description.value.trim() == ""||person.value.trim() == "")
    {
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please don't use only whitespaces!";}
        
    else if (convertedDatepicker<convertedTodayDate)
    {console.log(convertedDatepicker);
        console.log(convertedTodayDate);
        document.getElementById("alertm").className = "alert alert-danger";
        document.getElementById("alertm").innerHTML="<strong>Error!</strong> Please assign correct date!";
        }
   else { 
    document.getElementById("alertm").className = "";
    document.getElementById("alertm").innerHTML="";
    
    
    // This variable stores all the data.
    let data = 
        '\r Task Name: ' + name.value + ' \r\n ' + 
        'Task Description: ' + description.value + ' \r\n ' + 
        'Assigned Person: ' + person.value + ' \r\n ' + 
        'Due: ' + datepicker.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

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

//Found this Youtube video helpful: https://www.youtube.com/watch?v=Pc2e2YpKArg
//And this followup video for multiple fields: https://www.youtube.com/watch?v=xvXtb7mwMd8 
/*
function formValidation() {
    let errorMessage = "";

    if (taskNameValue === "") {
        errorMessage += "Name must be filled out. \n";
        /*document.getElementById('formError').innerHTML = 'Name not filled out. You silly goose.'; */
/*        }
/*
    if (taskDescriptionValue === "") {
        errorMessage += "Description must be filled out. \n";
        /*document.getElementById('formError').innerHTML = 'The Description was not filled out. You silly goose.'; */
 /*   }

    if (assignToValue === "") {
        errorMessage += "Please assign someone this task. \n";
        /*document.getElementById('formError').innerHTML = 'Please assign this task to someone. You silly goose.'; */
/*    }

    /*if (datePickerValue === "") {
        errorMessage +=("Due Date must be filled out. \n");
        document.getElementById('formError').innerHTML = 'Tells us when you would like this done by. You silly goose.';
    } */

 /*   if (errorMessage !== "") {
        //alert(errorMessage);
        document.getElementById('formError').innerHTML = errorMessage + "You silly goose.";
        return false;
    }
    /*else {
        console.log("Name:  " + taskNameValue);
        console.log("Description:  " + taskDescriptionValue);
        console.log("Assigned To:  " + assignToValue);
        console.log("Due By:  " + datePickerValue);
    }*/
/*}
*/

/* This was the original attempt to create the function. 
validFormFieldInput = (data) =>{
    if (taskNameValue === "") {
        alert("Name must be filled out");
        return false;
      } else if (taskDescriptionValue === "") {
          alert("Description must be filled out");
          return false;
      } else if (assignToValue === "") {
          alert("Assign To Field must be filled out");
          return false;
      } else if (datePickerValue === "") {
          alert("Due by date must be filled out");
          return false;
      } else {
        console.log("Name:  "+ taskNameValue);
        console.log("Description: " + taskDescriptionValue);
        console.log("Assigned To: " + assignToValue);
        console.log("Due Date: " + datePickerValue);
      }
    }
}
*/
