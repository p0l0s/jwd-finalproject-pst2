
// Function for creating formatted HTML for task fields
const createTaskHtml = (name, description, person, datepicker, status, id) => {
    let badge, status1, status2, status3, optionValue1, optionValue2, optionValue3, padding;
    if (status === 'open')
    {
        badge = 'badge-danger';
        status0 = 'Open';
        status1 = 'Closed';
        status2 = 'In Progress';
        status3 = 'Pending';
        optionValue1 = 'closed';
        optionValue2 = 'inprogress';
        optionValue3 = 'pending';
            }
             else if (status === 'closed') {
                badge = 'badge-success';
                status0 = 'Closed';
                status1 = 'In Progress';
                status2 = 'Open';
                status3 = 'Pending';
                optionValue1 = 'inprogress';
        optionValue2 = 'open';
        optionValue3 = 'pending';

            }
            else if (status === 'inprogress') {
                badge = 'badge-primary';
                status0 = 'In Progress';
                status1 = 'Closed';
                status2 = 'Open';
                status3 = 'Pending';
                optionValue1 = 'closed';
        optionValue2 = 'open';
        optionValue3 = 'pending';
            }
                else  {
                    badge = 'badge-warning';
                    status0 = 'Pending';
                    status1 = 'Closed';
                    status2 = 'In Progress';
                    status3 = 'Open';
                    optionValue1 = 'closed';
                    optionValue2 = 'inprogress';
                    optionValue3 = 'open';
                }
        if (i % 2==0)
        {
            padding = 'pr-2';
        }
        else{
            padding = 'pl-2';
        }
    const html = `
    <div class="col-sm-6 p-0 pb-3 ${padding}">
        <div class="card mb-6">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-9">
                    <h4 class="card-title">${name}</h4>
                    </div>
                    <div class="col-sm-3 text-left">
                    <h4><span class="badge ${badge}">${status0}</span></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                    <small class="text-muted">Assigned to: ${person}</small>
                    </div>
                    <div class="col-sm-6">
                    <small class="text-muted">Due to: ${datepicker}</small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 pt-2 pb-2">
                    <p class="card-text">${description}.</p>
                    </div>
                    </div>


                <div class="row">
                    <div class="col-sm-8">
                        <select class="form-control" id="${id}" onchange="changeStatus(${id})">
                        <option selected value="">Change Status</option>

                        <option value="${optionValue1}">${status1}</option>
                        <option value="${optionValue2}">${status2}</option>
                        <option value="${optionValue3}">${status3}</option>
                    
                        </select>
                    </div>
                        <div class="col-sm-4">
                    <button type="button" class="btn btn-default btn-outline-secondary" id="${id}" onclick="deleteTask(${id})">Delete</button>
                
                    </div>
                </div>


            
        
            </div>
        </div>
    </div>`;
return html;
}



class TaskManager {
    constructor(currentId)
    {
        this.tasks = [];    // task with parameters
        this.currentId = currentId;
        this.openTasksHtml = [];    // html formated not-closed tasks
        this.closedTasksHtml = []; // html formated closed tasks
    }

    // Method to save task fields into this.tasks array in JSON format
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
        // Incrementing currentId
        this.currentId = this.currentId + 1;
    }
    
    // Method to read all tasks from this.tasks and generate formatted
    // HTML for all tasks
    render() {
        let tasksHtmlList = [];
        this.openTasksHtml = [];   
        this.closedTasksHtml = [];

        // Iterating over each task in this.tasks array
        for(let i=0; i<this.tasks.length; i++)
        {
            

            // Converting task fields into HTML using createTaskHtml function
            let taskHtml = createTaskHtml(
                this.tasks[i]['name'],
                this.tasks[i]['description'],
                this.tasks[i]['assignedTo'],
                this.tasks[i]['dueDate'],
                this.tasks[i]['status'],
                this.tasks[i]['id']
            )

            // Adding converted task HTML to array of tasks
                if(this.tasks[i]['status']==='closed')
                {
                    this.closedTasksHtml.push(taskHtml); 
                }
                else 
                {
                    this.openTasksHtml.push(taskHtml); 
                }

            //console.log(this.closedTasksHtml);
            //console.log(this.openTasksHtml);
            
        }
        
    }
    }

// Creating TaskManager object for managing tasks
    const tasker = new TaskManager(0);
    