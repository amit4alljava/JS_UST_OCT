// Task Function Constructor
function Task(taskId, taskName, taskDesc){
this.taskId = taskId;
this.taskName = taskName;
this.taskDesc = taskDesc;
}

// Creating an Object
var taskOperations={
    taskList:[],
    addTask:function(taskObject){
        this.taskList.push(taskObject);
    }
}