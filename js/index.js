AOS.init();



const task = document.getElementById("task");
const time = document.getElementById("time");
const addTask = document.querySelector(".onClick > button");

addTask.addEventListener("click", getTodo);

function getTodo(e) {
    const incomplete = document.querySelector("#incomplete");
    const complete = document.querySelector("#complete");

    const createLi = document.createElement("li");
    const completeBtn = document.createElement("a");
    const deleteBtn = document.createElement("a");

    createLi.style.backgroundColor = '#ffe4b5';
    completeBtn.innerHTML = '<button class="getBtn btn btn-outline-success" id="complete">completed</button>';
    deleteBtn.innerHTML = '<i class="fas fa-times" id="delete"></i>';

    if (task.value !== "" && time.value !== "") {
        createLi.textContent = task.value + " by " + time.value;
        task.value = "";
        time.value = "";
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
        createLi.style.backgroundColor = '#32cd32';
    }

    deleteBtn.addEventListener("click", deleteList);

    function deleteList() {
        const parent = this.parentNode;
        parent.remove();
    }
}