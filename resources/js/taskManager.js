class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask (name1, description, assign, datepick, status = 'TODO') {
        this.tasks.push({
            'id':this.currentId,
            name1,
            description,
            'assignedTo': assign,
            'dueDate': datepick,
            status,
            });
        this.currentId ++;
    }
}
   
//const test = new TaskManager();
//console.log(test.task);

//console.log(TaskManager);
