document.addEventListener("DOMContentLoaded", () => {



    deleteTaskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        new FormData(deleteTaskForm);

        deleteTask();
    });
});


function deleteTask() {

var data = [fetch('http://127.0.0.1:3000/tasks')
.then(function(response){
    return response.json();
})];

var deleteTaskInput = document.getElementById("deleteTaskInput").value;
var index = data.findIndex(obj => obj.id == deleteTaskInput);

console.log(index);
}