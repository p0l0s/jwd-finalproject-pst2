class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask (taskNameValue, taskDescriptionValue, assignToValue, datePickerValue, status = 'TODO') {
        this.tasks.push({
            'id': this.currentId,
            taskNameValue,
            taskDescriptionValue,
            'assignedTo': assignToValue,
            'dueDate': datePickerValue,
            'status': this.status
            });
        this.currentId ++;
    }
}
   
//const test = new TaskManager();
//console.log(test.task);

//console.log(TaskManager);
