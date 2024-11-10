var idCount = 0;
var todos = [];

function addTodo() {
    var inpVal = document.getElementById('inp');
    
    if (inpVal.value.trim() === "") {
        alert("Please add a Todo Task!");
        return;
    }

    todos.push({
        id: idCount,
        title: inpVal.value
    });

    render();

    idCount++;
    inpVal.value = "";
}

function render() {
    var todoElem = document.getElementById('todos');
    todoElem.innerHTML = "";

    todos.forEach(todo => {
        var elem = document.createElement('div');
        var textElem = document.createElement('p');
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        textElem.textContent = todo.title;
        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update";

        elem.setAttribute("id", todo.id);
        elem.setAttribute("class", "todo");

        deleteButton.classList.add("delete-btn");
        updateButton.classList.add("update-btn");

        deleteButton.setAttribute("onclick", `confirmDelete(${todo.id})`);
        updateButton.setAttribute("onclick", `updateTodoPrompt(${todo.id})`);

        elem.appendChild(textElem);
        elem.appendChild(updateButton);
        elem.appendChild(deleteButton);
        todoElem.appendChild(elem);
    });
}

function confirmDelete(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        deleteTodo(id);
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function updateTodoPrompt(id) {
    var newTitle = prompt("Update the task:");
    if (newTitle && newTitle.trim() !== "") {
        updateTodoTitle(id, newTitle.trim());
    }
}

function updateTodoTitle(id, title) {
    var todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
        todos[todoIndex].title = title;
        render();
    }
}
