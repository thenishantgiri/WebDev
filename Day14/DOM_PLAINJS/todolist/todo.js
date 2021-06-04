window.onload = () => {
  let newtask = document.getElementById("newtask");
  let addtask = document.getElementById("addtask");
  let todolist = document.getElementById("todolist");

  addtask.onclick = () => {
    let li = document.createElement("li");
    li.innerText = newtask.value;

    //delete button
    let xBtn = document.createElement("button");
    xBtn.innerText = "❌";

    //click event
    xBtn.onclick = (event) => {
      event.target.parentElement.remove();
    };

    li.appendChild(xBtn);

    todolist.appendChild(li);

    // todolist.innerHTML += `<li>${newtask.value}</li>`; // using this statement will cause performance issue
  };
};
