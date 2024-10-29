let idCount = 1;

function addTodo() {
    const todos = document.getElementById('todos');
    const inpVal = document.getElementById('inp');


    if (inpVal.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }


    todos.setAttribute('class', 'todosContainer');


    const element = document.createElement('div');
    element.setAttribute('id', idCount);
    element.setAttribute('class', 'todo highlight');

    element.innerHTML = `
        <p>${inpVal.value}</p> 
        <div>
            <button class="btn-delete" onclick="deleteTodo(${idCount})">Delete</button> 
            <button class="btn-update" onclick="updateTodoPrompt(${idCount})">Update</button>
        </div>
    `;


    todos.appendChild(element);


    setTimeout(() => element.classList.remove('highlight'), 500);


    inpVal.value = "";
    idCount++;
}

function deleteTodo(id) {
    const deletedItem = document.getElementById(id);
    const parentElem = deletedItem.parentNode;
    parentElem.removeChild(deletedItem);
}

function updateTodoPrompt(id) {
    const newTask = prompt("Update your task:");
    if (newTask && newTask.trim() !== "") {
        const todoItem = document.getElementById(id);
        todoItem.innerHTML = `
            <p>${newTask}</p>
            <div>
                <button class="btn-delete" onclick="deleteTodo(${id})">Delete</button>
                <button class="btn-update" onclick="updateTodoPrompt(${id})">Update</button>
            </div>
        `;
        todoItem.classList.add('highlight');

       
        setTimeout(() => todoItem.classList.remove('highlight'), 500);
    } else {
        alert("Please enter a valid task.");
    }
}
