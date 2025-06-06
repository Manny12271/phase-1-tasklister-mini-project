document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = event.target.elements["new-task-description"].value;
    buildToDo(taskInput);
  });
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("tasks").appendChild(li);
}
