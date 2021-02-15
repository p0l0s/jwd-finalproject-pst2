
// Function for creating HTML for task fields
const createTaskHtml = (name, description, person, datepicker, status, id) => {
    // These variables are used to modify HTML code for tasks
    let badge, status1, status2, status3, optionValue1, optionValue2, optionValue3;
    // Variables initialization for tasks with 'open' status
    if (status === 'open')
    {
        // Color of header
        header = 'bg-danger text-white';
        // Color of badge
        badge = 'badge-danger';
        // Badge text
        status0 = 'Open';
        // 'Changes Status' options text
        status1 = 'Closed';
        status2 = 'In Progress';
        status3 = 'Pending';
        // 'Changes Status' options ids
        optionValue1 = 'closed';
        optionValue2 = 'inprogress';
        optionValue3 = 'pending';
    }
    // Variables initialization for tasks with 'closed' status
    else if (status === 'closed') 
    {
        header = 'bg-success text-white';
        badge = 'badge-success';
        status0 = 'Closed';
        status1 = 'In Progress';
        status2 = 'Open';
        status3 = 'Pending';
        optionValue1 = 'inprogress';
        optionValue2 = 'open';
        optionValue3 = 'pending';
    }
    // Variables initialization for tasks with 'inporogress' status
    else if (status === 'inprogress') 
    {
        header = 'bg-primary text-white';
        badge = 'badge-primary';
        status0 = 'In Progress';
        status1 = 'Closed';
        status2 = 'Open';
        status3 = 'Pending';
        optionValue1 = 'closed';
        optionValue2 = 'open';
        optionValue3 = 'pending';
    }
    // Variables initialization for tasks with 'pending' status
    else  
    {
        header = 'bg-warning text-dark';
        badge = 'badge-warning';
        status0 = 'Pending';
        status1 = 'Closed';
        status2 = 'In Progress';
        status3 = 'Open';
        optionValue1 = 'closed';
        optionValue2 = 'inprogress';
        optionValue3 = 'open';
    }
     
    // Variable to save HTML code for each task
    const html = `
    <div class="col-sm-6 p-1">
        <div class="card mb-6">
            <div class="card-header ${header} h5" onclick="editTask(${id})" role="button">${name}</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <h6><span class="badge ${badge}">${status0}</span></h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <small class="text-muted">Assigned to: ${person}</small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <small class="text-muted">Due to: ${datepicker}</small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 pt-3 pb-3">
                        <p class="card-text">${description}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-auto">
                        <select class="form-control btn-outline-secondary w-auto" id="${id}" onchange="changeStatus(${id})">
                        <option selected value="">Change Status</option>
                        <option value="${optionValue1}">${status1}</option>
                        <option value="${optionValue2}">${status2}</option>
                        <option value="${optionValue3}">${status3}</option>
                        </select>
                    </div>
                    <div class="col-sm-auto">
                        <button type="button" class="btn btn-default btn-outline-secondary" id="${id}" onclick="deleteTask(${id})">Delete</button>
                    </div>
                </div>       
            </div>
        </div>
    </div>`;
    return html;
}

// The class for creating tasks
class TaskManager {
    constructor()
    {
        // Array to save tasks
        this.tasks = [];    
        // Initial id
        this.currentId = 0;
        // Array to save HTML formated not-closed tasks
        this.openTasksHtml = []; 
        // Array to save HTML formated closed tasks   
        this.closedTasksHtml = []; 
        // id which used if we call 'saveTask' in 'editTask' function
        this.editedId = null;
    }

    // Method to save task fields into this.tasks array in JSON format
    addTask (name, description, person, datepicker, status)
    {
        // Temporary array, we will need if we call 'saveTask' function to save the edited task
        let temp = {
            name,
            description,
            'assignedTo':person,
            'dueDate':datepicker,
            status,
            'id':this.currentId
        };
        // Checks if we save a new task ('this.editedId' is null)
        if(this.editedId===null) {
        this.tasks.push(temp);
        // Increments 'this.currentId' to have an unique id for a future task
        this.currentId = this.currentId + 1;
        }
        // Checks if we edit an existing task ('this.editedId' is not null)
        else {
            for(let i=0; i<this.tasks.length; i++)
            {
                // Founds the edited task 
                if(this.tasks[i]['id']===this.editedId)
                {
                // Saves id which used if we call 'saveTask' in 'editTask' function
                temp['id']=this.editedId;
                // Saves edited task
                this.tasks[i]=temp;
                // Sets 'this.editedId' back to null
                this.editedId=null;
                }
            }
        }
    }
    
    // Method to save all tasks from this.tasks and generate HTML code (string) for each task
    render() 
    {
        // Array with HTML codes (string) for each task (non-closed tasks)
        this.openTasksHtml = [];   
        // Array with HTML codes (string) for each task (closed tasks)
        this.closedTasksHtml = [];

        // Iterates over each task in this.tasks array
        for(let i=0; i<this.tasks.length; i++)
        {
            // Converts task fields into HTML for each task using createTaskHtml function
            let taskHtml = createTaskHtml(
            this.tasks[i]['name'],
            this.tasks[i]['description'],
            this.tasks[i]['assignedTo'],
            this.tasks[i]['dueDate'],
            this.tasks[i]['status'],
            this.tasks[i]['id']
            )

            // Adds HTML for each tasks to different arrays of tasks (closed and non-closed tasks)
            if(this.tasks[i]['status']==='closed')
                {
                    this.closedTasksHtml.push(taskHtml); 
                }
                else 
                {
                    this.openTasksHtml.push(taskHtml); 
                }
        }

    // Adds a single string with HTML code for non-closed tasks in 'index.html' after click on 'Add Task' 
     document.getElementById("openTasks").innerHTML= tasker.openTasksHtml.join('\n');
    // Adds a single string with HTML code for closed tasks in 'index.html' after click on 'Add Task'  
     document.getElementById("closedTasks").innerHTML= tasker.closedTasksHtml.join('\n');
    }
}


// Creates 'TaskManager' object for managing tasks
const tasker = new TaskManager();

module.exports = TaskManager;


