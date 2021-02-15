const assert = require('assert');
const TaskManager = require('../js/taskManager');

const testTasker = new TaskManager();
testTasker.tasks = [
    { name:"Empty the kitty litter" , description:"It is starting to really pile up and smell." , assignedTo: "Tetiana \"Cat\" Chorna" , dueDate:"02/20/2021" , status:"inprogress" , id: 0 }, 
    { name:"Train the Cat to Chase Mice" , description:"Use Tom and Jerry training videos if you need to." , assignedTo: "Jenna \"Jaguar\" Sosa" , dueDate:"02/23/2021" , status:"pending" , id: 1 },
    { name:"Name the Kitten" , description:"Give it an adorable name, like Fido.", assignedTo: "Kathryn \"WildCat\" Williams" , dueDate:"02/20/2021 " , status:"closed" , "id": 2 },
    { name:"Take the cat for a walk" , description:"Cats love to be on a leash. If not, bandaids are in the bathroom.", assignedTo: "Yared \"Ocelot\" Nigatu", dueDate:"02/20/2021" , status:"open" , id: 3 }, 
    { name:"Fill Cat Task Lists with Fake Tasks" , description:"Try to think of something funny and cat themed.", assignedTo: "Michael \"Maine Coon\" Simms", dueDate:"02/20/2021" , status:"closed" , id: 4 } 
    ];

describe('addTask', () => {
    it('tests add a new task feature', () => {
        // Setup
        const name = 'New Task';
        const description = 'New Task Description';
        const person ='Tetiana \"Cat\" Chorna';
        const datepicker = '02/25/2021';
        const status = 'open';
                
        // Exercise
        testTasker.addTask(name, description, person, datepicker, status);
  
        // Verify
        assert.ok(testTasker.tasks[5]['name'] === name);
        assert.ok(testTasker.tasks[5]['description'] === description);
        assert.ok(testTasker.tasks[5]['assignedTo'] === person);
        assert.ok(testTasker.tasks[5]['dueDate'] === datepicker);
        assert.ok(testTasker.tasks[5]['status'] === status);
        assert.ok(testTasker.currentId === 1);
    });
    });

  describe('addTask', () => {
    it('tests edit an existing task feature', () => {
        // Setup
        const name = 'New Task';
        const description = 'New Task Description';
        const person ='Tetiana \"Cat\" Chorna';
        const datepicker = '02/25/2021';
        const status = 'open';       
  
        testTasker.editedId = 2;
        
        // Exercise
        testTasker.addTask(name, description, person, datepicker, status);

  
        // Verify
        assert.ok(testTasker.tasks[2]['name'] === name);
        assert.ok(testTasker.tasks[2]['description'] === description);
        assert.ok(testTasker.tasks[2]['assignedTo'] === person);
        assert.ok(testTasker.tasks[2]['dueDate'] === datepicker);
        assert.ok(testTasker.tasks[2]['status'] === status);
        assert.ok(testTasker.editedId === null);
    });
    });

  describe('addTask', () => {
    it('tests edit of a non-existing task feature', () => {
        // Setup
        const name = 'New Task';
        const description = 'New Task Description';
        const person ='Tetiana \"Cat\" Chorna';
        const datepicker = '02/25/2021';
        const status = 'open';
        
        testTasker.editedId = 22;
        
        // Exercise
        testTasker.addTask(name, description, person, datepicker, status);
  
        // Verify
        assert.ok(testTasker.editedId === 22);
    });
    });