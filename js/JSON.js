//the following is also on index.js line 133

//pre-populate the initial page with a handful of tasks. 
const firstTasks = '{ "tasks" : [' +
'{ "name":"Empty the kitty litter" , "description":"It is starting to really pile up and smell" , "assignedTo": "Tetiana \"Cat\" Chorna" , "dueDate":"02/20/2021" , "status":"In Progress" , "id": "0" },' +
'{ "name":"Train the Cat to Chase Mice" , "description":"Use Tom and Jerry training videos if you need to" , "assignedTo": "Jenna \"Jaguar\" Sosa" , "dueDate":"02/23/2021" , "status":"Pending" , "id": "1" },' +
'{ "name":"Name the Kitten" , "description":"Give it an adorable name, like Fido", "assignedTo": "Kathryn \"WildCat\" Williams" , "dueDate":"02/20/2021 " , "status":"Closed" , "id": "2" },' +
'{ "name":"Take the cat for a walk" , "description":"Cats love to be on a leash. If not, bandaids are in the bathroom.", "assignedTo": "Yared \"Ocelot\" Nigatu" "dueDate":"02/20/2021" , "status":"Open" , "id": "3" },' +
'{ "name":"Fill Cat Task Lists with Fake Tasks" , "description":"Try to think of something funny and cat themed.", "assignedTo": "Michael \"Maine Coon\" Simms" "dueDate":"02/20/2021" , "status":"Closed" , "id": "4" } ]}'; 

TaskManager.addTask(JSON.parse(firstTasks));
