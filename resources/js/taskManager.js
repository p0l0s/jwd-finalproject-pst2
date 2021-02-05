class TaskManager {
    constructor(currentId = 0)
    {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask (name, description, person, datepicker, status = 'TODO')
    {
        this.tasks.push({
            'id':this.currentId
            name,
            description,
            'assignedTo': person,
            'dueDate': datepicker,
            status,
            
        });
        this.currentId ++ 1;
    }

    }
   
//const test = new TaskManager();
//console.log(test.task);

//console.log(TaskManager);
