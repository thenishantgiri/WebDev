window.onload = () => {
  let newtask = document.getElementById("newtask");
  let addtask = document.getElementById("addtask");
  let todolist = document.getElementById("todolist");

  addtask.onclick = () => {
    let li = document.createElement("li");

    //delete button
    let xBtn = document.createElement("button");
    xBtn.innerText = "❌";

    //click event
    xBtn.onclick = (event) => {
      event.target.parentElement.remove();
    };

    //up button
    let upBtn = document.createElement("button");
    upBtn.innerText = "⬆️";

    upBtn.onclick = (event) => {
      // event.target = the up button
      // event.target.parentElement = the <li> item
      // event.target.parentElement.parentElement is the todolist

      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement, //insert this element
        event.target.parentElement.previousElementSibling //before it's previous element
      );
    };

    //down button
    let downBtn = document.createElement("button");
    downBtn.innerText = "⬇️";

    downBtn.onclick = (event) => {
      // event.target = the down button
      // event.target.parentElement = the <li> item
      // event.target.parentElement.parentElement is the todolist

      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement.nextElementSibling, //insert next element
        event.target.parentElement //before current element
      );
    };

    //Add the task text
    let taskSpan = document.createElement("span");
    taskSpan.innerText = newtask.value;

    li.appendChild(xBtn);
    li.appendChild(upBtn);
    li.appendChild(downBtn);
    li.appendChild(taskSpan);

    todolist.appendChild(li);

    // todolist.innerHTML += `<li>${newtask.value}</li>`; // using this statement will cause performance issue
  };
};
