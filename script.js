function checkTasks() {
  const task1 = document.getElementById("task1").checked;
  const task2 = document.getElementById("task2").checked;
  const task3 = document.getElementById("task3").checked;
  const task4 = document.getElementById("task4").checked;

  if (task1 && task2 && task3 && task4) {
    document.getElementById("popup").classList.remove("hidden");
    localStorage.setItem("arabicTasksDone", "yes");
  } else {
    document.getElementById("popup").classList.add("hidden");
    localStorage.setItem("arabicTasksDone", "no");
  }
}

window.onload = () => {
  const done = localStorage.getItem("arabicTasksDone") === "yes";
  if (done) {
    document.getElementById("popup").classList.remove("hidden");
    ["task1", "task2", "task3", "task4"].forEach(id => {
      document.getElementById(id).checked = true;
    });
  }
};

