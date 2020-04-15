window.onload = initialCash();

let box = document.querySelector("#cash");
box.addEventListener("click", function (event) {
  actualizeTotalCash();
});

function setTotalCash(value) {
  let totalCash = document.getElementById("totalCash").innerText;

  let val = convertToFloat(value).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  console.log(val);
  return (totalCash.innerText = val);
}

function convertToString(val) {
  return val.toString();
}

function convertToInt(val) {
  return parseInt(val);
}

function convertToFloat(value) {
  return parseFloat(value);
}

function initialCash() {
  let cash = "100,00";
  let val = convertToFloat(cash).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  return setTotalCash(val);
}

function actualizeTotalCash() {
  let currentValue = convertToFloat(
    document.getElementById("totalCash").innerText
  );
  let newValue = currentValue + 0.1;
  console.log(currentValue);
  return setTotalCash(newValue);
}
