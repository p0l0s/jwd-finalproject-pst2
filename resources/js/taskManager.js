class TaskManager {
    constructor(currentId = 0) {
        this.task = ['item 1', 'item 2'];
        this.currentId = currentId;
    }
   addTask(name1, description, assign, datePicker, status) {
        this.currentId ++ ;
        this.task.push(this.currentId, name1, description, assign, datePicker, status = 'TODO')
    } 
} 
 
   
const test = new TaskManager();
test.addTask('Michae', 'is awesome', 'Tanya', '12/22/2002', );
console.log(test.task);

//console.log(TaskManager);
