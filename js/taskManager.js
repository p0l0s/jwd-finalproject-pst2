
// Function for creating formatted HTML for task fields
const createTaskHtml = (name, description, person, datepicker, status) => {
    const html = `
    <div class="col-sm-6 p-0 pb-3 pr-2">
    <div class="card mb-6">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-9">
            <h4 class="card-title">${name}</h4>
          </div>
          <div class="col-sm-3 text-right">
            <h4><span class="badge badge-danger">${status}</span></h4>
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
          <div class="col-sm-12 text-right">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle btn-outline-secondary text-left" type="button" data-toggle="dropdown">Change Status</button>
                <ul class="dropdown-menu pl-2">
                  <li>Closed</li>
                  <li>In Progress</li>
                  <li>Pending</li>
                </ul>
              <button type="button" class="btn btn-default btn-outline-secondary">Delete</button>
            </div>
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
        this.tasks = [];
        this.currentId = currentId;
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
       

        // Iterating over each task in this.tasks array
        for(let i=0; i<this.tasks.length; i++)
        {
            

            // Converting task fields into HTML using createTaskHtml function
            let taskHtml = createTaskHtml(
                this.tasks[i]['name'],
                this.tasks[i]['description'],
                this.tasks[i]['assignedTo'],
                this.tasks[i]['dueDate'],
                this.tasks[i]['status']
            )
            // Adding converted task HTML to array of tasks
            tasksHtmlList.push(taskHtml);
            
        }
        // Joining array of HTML converted tasks into single string
        let tasksHtml = tasksHtmlList.join('\n');
        
        return tasksHtml;
    }
    }

// Creating TaskManager object for managing tasks
    const task = new TaskManager(0);
    