const chartext = document.querySelector(".char-text");
const taskcontainer = document.querySelector(".task-container");
const completedContainer = document.querySelector(".completed");

const completedList = document.createElement("ul");
completedList.className = "completed-list";
completedContainer.appendChild(completedList);


function addtasks() {
    if (chartext.value.trim() === '') {
        alert("Write the task to be done!");
        return;
    }

    const li = document.createElement("li");
    const taskId = Date.now().toString();

    li.setAttribute("data-id", taskId);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = chartext.value;
    taskText.setAttribute("data-id", taskId);

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.className = "edit-btn";

    const span = document.createElement("span");
    span.className = "close-btn";
    span.innerHTML = "x";

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(span);

    taskcontainer.appendChild(li);
    chartext.value = "";

    saveData();
    updateProgress();
}


taskcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
        saveData();
        updateProgress();
    } else if (e.target.classList.contains("task-checkbox")) {
        const li = e.target.parentElement;
        moveToCompleted(li);
    } else if (e.target.classList.contains("edit-btn")) {
        const li = e.target.parentElement;
        const textSpan = li.querySelector(".task-text");
        const taskId = textSpan.getAttribute("data-id");

        const currentText = textSpan.textContent;
        const newText = prompt("Edit your task:", currentText);

        if (newText !== null && newText.trim() !== "") {
            textSpan.textContent = newText.trim();

            
            const completedMatch = completedList.querySelector(`[data-id="${taskId}"]`);
            if (completedMatch) {
                completedMatch.textContent = newText.trim();
            }

            saveData();
        }
    }
}, false);


function moveToCompleted(taskItem) {
    const taskTextElement = taskItem.querySelector(".task-text");
    const taskText = taskTextElement.textContent;
    const taskId = taskTextElement.getAttribute("data-id");

    taskItem.classList.add("move-out");

    setTimeout(() => {
        const li = document.createElement("li");
        li.className = "completed-item fade-in";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;
        checkbox.disabled = true;
        checkbox.className = "task-checkbox1";

        const text = document.createElement("span");
        text.textContent = taskText;
        text.className = "green-task";
        text.setAttribute("data-id", taskId);

        const delBtn = document.createElement("button");
        delBtn.textContent = "delete";
        delBtn.className = "delete-btn";

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(delBtn);

        completedList.appendChild(li);
        taskItem.remove();

        saveData();
        updateProgress();
    }, 300);
}

completedList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveData();
        updateProgress();
    }
});

function saveData() {
    localStorage.setItem("tasks", taskcontainer.innerHTML);
    localStorage.setItem("completed", completedList.innerHTML);
}

function showTask() {
    taskcontainer.innerHTML = localStorage.getItem("tasks") || "";
    completedList.innerHTML = localStorage.getItem("completed") || "";
    updateProgress();
}
showTask();

function complete() {
    document.querySelector(".container").style.display = "none";
    completedContainer.style.display = "block";
}

function goback() {
    document.querySelector(".container").style.display = "block";
    completedContainer.style.display = "none";
}

function updateProgress() {
    const total = taskcontainer.querySelectorAll("li").length + completedList.querySelectorAll("li").length;
    const done = completedList.querySelectorAll("li").length;
    const percent = total ? Math.round((done / total) * 100) : 0;

    let bar = document.querySelector(".progress-bar");
    let label = document.querySelector(".progress-label");

    if (!bar) {
        bar = document.createElement("div");
        bar.className = "progress-bar";
        label = document.createElement("div");
        label.className = "progress-label";
        document.querySelector(".headtitle").appendChild(label);
        document.querySelector(".headtitle1").appendChild(bar);
    }

    bar.style.width = percent + "%";
    bar.textContent = percent + "% Done";
    label.textContent = `${done} out of ${total} tasks completed`;
}
