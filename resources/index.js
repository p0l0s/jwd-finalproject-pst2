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

// form.addEventListener('submit', = 
// took out event listener because it's in the index.html  

function formValidation() {
    let errorMessage = "";

    if (taskNameValue === "") {
        errorMessage +=("Name must be filled out. \n");
        document.getElementById('formError').innerHTML = 'Name not filled out. You silly goose.';
        }

    if (taskDescriptionValue === "") {
        errorMessage +=("Description must be filled out. \n");
        document.getElementById('formError').innerHTML = 'The Description was not filled out. You silly goose.';
    }

    if (assignToValue === "Assign a Cat Sitter") {
        errorMessage +=("Please assign someone this task. \n");
        document.getElementById('formError').innerHTML = 'Please assign this task to someone. You silly goose.';
    }

    /*if (datePickerValue === "") {
        errorMessage +=("Due Date must be filled out. \n");
        document.getElementById('formError').innerHTML = 'Tells us when you would like this done by. You silly goose.';
    } */

    if (errorMessage !== "") {
        //alert(errorMessage);
        document.getElementById('formError').innerHTML = errorMessage + "You silly goose.";
        return false;
    }
    else {
        console.log("Name:  "+ taskNameValue);
        console.log("Description:  "+ taskDescriptionValue);
        console.log("Assigned To:  "+ assignToValue);
        console.log("Due By:  "+ datePickerValue);
    }
}
//Found this Youtube video helpful: https://www.youtube.com/watch?v=Pc2e2YpKArg
//And this followup video for multiple fields: https://www.youtube.com/watch?v=xvXtb7mwMd8 

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