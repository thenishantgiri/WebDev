let inpCode = document.getElementById("inpCode");
let btnEncode = document.getElementById("btnEncode");

let btnEncrypt = document.getElementById("btnEncrypt");

let code = document.getElementById("code");

btnEncode.onclick = () => {
  let data = inpCode.value;
  data = btoa(data);

  code.value = data;
};

btnEncrypt.onclick = () => {
  let data = code.value;
  data = encryptData(data);
  code.value = data;
};

function encryptData(rawData) {
  let encryptedData = "";

  for (let index in rawData) {
    let raw = rawData[index];

    if (raw == raw.toLowerCase()) {
      encryptedData = encryptedData + raw.toUpperCase();
    } else {
      encryptedData = encryptedData + raw.toLowerCase();
    }
  }
  return encryptedData;
}