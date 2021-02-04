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
}

