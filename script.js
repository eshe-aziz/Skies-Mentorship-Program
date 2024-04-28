// const todo_input_field = document.getElementById("todo_input_field");
// const task_container = document.getElementById("task_container");
// function addTask(){
//     if(todo_input_field.value === ''){
//         alert("You must write something!")
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = todo_input_field.value;
//         task_container.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     todo_input_field.value = '';
//     saveTasks();
// }
// task_container.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveTasks();
//     }
//     else if (e.target.tagName ==="SPAN"){
//         e.target.parentElement.remove();
//     }
// }, false);
// function saveTasks(){
//     localStorage.setItem("data",task_container.innerHTML);
// }
// function showTasks(){
//     task_container.innerHTML = localStorage.getItem("data");
// }
// showTasks();
// function toggleMenu(){
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}