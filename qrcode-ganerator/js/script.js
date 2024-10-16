const userInput = document.querySelector("#input");
const generateBtn = document.querySelector("#generateBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const errors = document.querySelector("#error");
const qrElem = document.querySelector("#qr");

function generateQr(input) {
  qrElem.innerHTML = "";

  let qr = new QRCode(qrElem, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  downloadBtn.style.display = "inline-block";
}

function downloadQr() {
  const qrCanvas = qrElem.querySelector("canvas");

  if (qrCanvas) {
    const qrDataUrl = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "qrcode.png";
    link.click();
  }
}

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let input = userInput.value.trim();
  console.log(input);

  if (input === "") {
    errors.innerHTML = "Please enter something...";
    return;
  }

  errors.innerHTML = "";

  generateQr(input);

  userInput.value = "";
});

downloadBtn.addEventListener("click", function () {
  downloadQr();
});
