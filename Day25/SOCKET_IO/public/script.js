let socket = io();

let boomBtn = document.getElementById("boom");
boomBtn.onclick = () => {
  socket.emit("boom");
};

socket.on("whizz", () => {
  let div = document.createElement("div");
  div.innerText = "whizz";
  document.body.appendChild(div);
});
