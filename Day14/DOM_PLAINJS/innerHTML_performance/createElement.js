window.onload = () => {
  let num = document.getElementById("num");
  let list = document.getElementById("list");
  let print = document.getElementById("print");

  print.onclick = () => {
    let start = new Date().getTime();

    let n = parseInt(num.value);
    for (let i = 1; i <= n; i++) {
      let item = document.createElement("li");

      list.innerText = i;

      list.appendChild(item);
    }

    console.log(new Date().getTime() - start);
  };
};
