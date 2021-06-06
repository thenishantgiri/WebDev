let inp = document.getElementById("inp");
let btnPrint = document.getElementById("btnPrint");
let ulList = document.getElementById("ulList");

btnPrint.onclick = () => {
  let start = Date.now();

  ulList.innerHTML = "";
  let c3 = 0;
  let c5 = 0;

  for (let i = 1; i <= inp.value; i++) {
    let li = document.createElement("li");

    c3++;
    c5++;

    let print = "";

    if (c3 == 3) {
      c3 = 0;
      print += "fizz";
    }
    if (c5 == 5) {
      c5 = 0;
      print += "buzz";
    }
    if (print === "") print = i;

    li.textContent = print;

    ulList.appendChild(li);
  }

  console.log("time taken", Date.now() - start);
};

/**
 *
 * Complexity of
 *
 * a+b :
 * if N = max num of bits in a and b
 *
 * + : O(n)
 * - : O(n)
 * * : O(n^2)
 * / : O(n^2)
 * % : O(n^2)
 *
 */
