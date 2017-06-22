app.controller("myCtrl", function () {
    var vm = this;
    vm.tasks = [{
            taskName: "Learn Angular",
            status: "InProgress", }, 
          {
            taskName: "Read Tutorials",
            status: "InProgress"
        , }];
    
    vm.changeStatus = function (task) {
        task.status = "Done";
    }
    
    vm.addTask = function (newTaskName) {
        if (newTaskName) {
            var newTask = {
                taskName: newTaskName
                , status: "InProgress"
            };
            vm.tasks.push(newTask);
            vm.taskNameField = "";
        }
        else {
            console.log("There are nothing in input field!!!");
        }
    }
    
    vm.deteleTask = function (item) {
        var index = vm.tasks.indexOf(item);
        vm.tasks.splice(index, 1);
    };
    
    vm.toEditTask = function (item) {
        var index = vm.tasks.indexOf(item);
        vm.editTaskNameField = item.taskName;
        vm.editTask = function () {
            item.taskName = vm.editTaskNameField;
        }
    };
})