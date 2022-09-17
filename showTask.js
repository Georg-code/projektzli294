document.addEventListener("DOMContentLoaded", () => {
    
fetch('http://127.0.0.1:3000/tasks')
.then(function(response){
    return response.json();
})
.then(function(datas){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let data of datas){
        out += `
            <tr>
                <td>${data.id}</td>
                <td>${data.title}</td>
                <td>${data.completed}</td>
            </tr>

        `;
    }

    placeholder.innerHTML = out;    
})
})