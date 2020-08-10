const task = document.querySelector("input");
const addTask = document.querySelector(".onClick > button");

addTask.addEventListener("click", getTodo);

function getTodo(e) {
    const incomplete = document.querySelector(".incomplete");
    const complete = document.querySelector(".complete");

    const createLi = document.createElement("li");
    const completeBtn = document.createElement("a");
    const deleteBtn = document.createElement("a");

    createLi.style.backgroundColor = 'yellow';
    completeBtn.innerHTML = '<button class="getBtn btn btn-outline-success">completed</button>';
    deleteBtn.innerHTML = '<button class="getBtn btn btn-outline-danger">delete</button>';

    if (task.value !== "") {
        createLi.textContent = task.value;
        task.value = "";
        incomplete.appendChild(createLi);
        createLi.appendChild(completeBtn);
        createLi.appendChild(deleteBtn);
    }

    completeBtn.addEventListener("click", markComplete);

    function markComplete() {
        const parent = this.parentNode;
        parent.remove();
        complete.appendChild(parent);
        completeBtn.style.display = 'none';
    }

    deleteBtn.addEventListener("click", deleteList);

    function deleteList() {
        const parent = this.parentNode;
        parent.remove();
    }
}