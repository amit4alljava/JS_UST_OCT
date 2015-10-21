window.addEventListener("load",taskInit);
var count = 1;
function taskInit(){
    loadJSONFromLocalStorage();
    document.getElementById("addTask").addEventListener("click",addTask);
    document.getElementById("saveTask").addEventListener("click",saveTask);

}

function loadJSONFromLocalStorage(){
    // It is Checking Truthy
    if(localStorage.taskjson){
            var taskList = JSON.parse(localStorage.taskjson);
            var ulTag = document.getElementsByTagName("ul")[0];
            taskList.forEach(function(taskObject,index){
                var liTag = document.createElement("li");
                liTag.innerHTML = taskObject.taskId+" "+taskObject.taskName+" "
                + taskObject.taskDesc;
                ulTag.appendChild(liTag);
                liTag.addEventListener("click",toggleTask);
            });
        count = taskList.length+1;
        taskOperations.taskList=taskList;
    }
}

function saveTask(){
    var jsonString = JSON.stringify(taskOperations.taskList);
    localStorage.taskjson = jsonString;
    var notificationObject = {
        body:"Task is Saved SuccessFully  ",
        icon:"images/save.png"
    }
    var notification;
    Notification.requestPermission(function(){
        notification = new Notification("TaskManager-Application",notificationObject);
    });
    function closeNotification() {
        notification.close();
    }
    setTimeout(closeNotification,7000);
}

function addTask(){
    var taskName = document.getElementById("taskName").value;
    var taskDesc = document.getElementById("taskDesc").value;
    var ulTag = document.getElementsByTagName("ul")[0];

    var liTag = document.createElement("li");
    liTag.innerHTML=count +" " +taskName+ " "+taskDesc;
    // Creating an Object of task
    var task = new Task(count,taskName,taskDesc);
    taskOperations.addTask(task);

    liTag.addEventListener("click",toggleTask);
    count++;
    ulTag.appendChild(liTag);
    var notificationObject = {
        body:"Task is Added SuccessFully in the List ",
        icon:"images/save.png"
    }
    var notification;
    Notification.requestPermission(function(){
       notification = new Notification("TaskManager-Application",notificationObject);
    });
    document.getElementById("audio").play();
    function closeNotification(){
        notification.close();
        document.getElementById("audio").pause();
        document.getElementById("audio").currentTime = 0;
    }
    setTimeout(closeNotification,7000);

}
function toggleTask(event){
var sourceElement = event.srcElement;
    sourceElement.classList.toggle("completeTask");
}