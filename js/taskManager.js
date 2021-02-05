const createTaskHtml = (name, description, person, datepicker, status) => {
    const html = `
    <div class="col-sm-6 p-0 pb-3 pr-2">
    <div class="card mb-6">
      <div class="card-body" id="newTask">
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
    render(){
      let tasksHtmlList = [];
      for (let i = 0; i < this.task.length; i++){
        let currentTask = this.task[i];
        let taskHtml = createTaskHtml(this.task[i]);
        currentTask.push(taskHtml);
        }
      let tasksHtml = tasksHtmlList.join(', /n'); 

        }
    }

    const task = new TaskManager(0);

