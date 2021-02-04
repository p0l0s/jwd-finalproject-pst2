/*const newTaskNameInput = document.querySelector('#newTaskNameInput');
const name = newTaskNameInput.value;*/

//used trim() property so that we can avoid someone just adding spaces. then decided to remove it because it would not console log properly.  

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

const alertMessage = document.querySelector('#formError').hidden = false;


//variables used for second validation method. 
const name1 = document.getElementById('taskName');
const description = document.getElementById('taskDescription');
const assign = document.getElementById('assignTo');
//const date = document.getElementById('datepicker');
const taskForm = document.getElementById('taskForm');
const error = document.getElementById('formError');


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
//Log Values into console after hitting submit button. Listener in html
function logValue (){
    console.log("Name1:  " + name1.value);
    console.log("Name2:  " + taskName.value);
    console.log("Description:  " + description.value);
    console.log("Assigned To:  " + assign.value);
    console.log("Due By:  " + datePicker.value);
}

//Found this Youtube video helpful: https://www.youtube.com/watch?v=Pc2e2YpKArg
//And this followup video for multiple fields: https://www.youtube.com/watch?v=xvXtb7mwMd8 
//And then this video to refine it further: https://www.youtube.com/watch?v=In0nB0ABaUk&t=271s 

taskForm.addEventListener('submit', (e) => {
    let errorMessage = []
    if (name1.value === '' || name1.value == null) {
        errorMessage.push('Please fill out Task Name.')
    }

    if (description.value === '' || description.value == null) {
        errorMessage.push('Please tell us what to do.')
    }

    if (assign.value === '' || assign.value == null) {
        errorMessage.push('Please assign a Cat Sitter.')
    }

    if (datePicker.value === '' || datePicker.value == null) {
        errorMessage.push('Please set a due date.')
    }

    if (errorMessage.length > 0) {
        e.preventDefault()
        error.innerText = errorMessage.join(' ') + ' You Silly Goose.'
    }
    
})

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

/*
//Tanya's solution to validation challenge:

let saveFile = () => {
    	
    // Get the data from each element on the form.
    /* Tanya's variables for the element IDs. She used different ids than Michael in HTML
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const person = document.getElementById('person');
    const datepicker = document.getElementById('datepicker');
    */
/*   
    // This variable stores all the data.
    let data = 
        '\r Task Name: ' + taskNameValue + ' \r\n ' + 
        'Task Description: ' + taskDescriptionValue + ' \r\n ' + 
        'Assigned Person: ' + assignToValue + ' \r\n ' + 
        'Due: ' + datePickerValue;
    
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