class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask (name1, description, assign, datepick, status = 'TODO') {
        this.tasks.push({
            'id': this.currentId,
            'name': name1.value,
            'description': description.value,
            'assignedTo': assign.value,
            'dueDate': datepick.value,
            'status': status.value,
            });
        this.currentId ++;
    }
}
   
//const test = new TaskManager();
//console.log(test.task);

//console.log(TaskManager);
