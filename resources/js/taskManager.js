class TaskManager {
    constructor() {
        this.task = ['item 1', 'item 2'];
        this.currentId = currentId;
        currentId = 0;
    }
   addTask(name1, description, assign, datePicker, status) {
        this.currentId ++ ;
        this.task.push(this.currentId, name1, description, assign, datePicker, status = 'TODO')
    }
} 
 
//console.log(TaskManager);   
