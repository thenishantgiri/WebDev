window.onload = () => {
  let num = document.getElementById("num");
  let list = document.getElementById("list");
  let print = document.getElementById("print");

  print.onclick = () => {
    let start = new Date().getTime();

    let listHTML = "";

    let n = parseInt(num.value);
    for (let i = 1; i <= n; i++) {
      listHTML += "<li>" + i + "</li>";
    }

    list.innerHTML = listHTML;

    console.log(new Date().getTime() - start);
  };
};
