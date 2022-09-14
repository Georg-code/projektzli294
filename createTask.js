

document.addEventListener("DOMContentLoaded", () => {



    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        new FormData(taskForm);

        createTask();
    });
})

function createTask() {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");

    let task = {
        title: taskInput.value
    };

    let response = fetch('http://127.0.0.1:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    }).then((response) => {

        return response.json();

    }).then((data) => {
        console.log(data);
    }
    );

}