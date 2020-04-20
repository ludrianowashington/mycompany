// Iniciando quando a janela é carregada

window.onload = initialization();

/**
 *  Função que carrega o necessário para a apliação
 */

function initialization() {
  newMain();
  changeValue();
  handleClick();
}

/**
 *  Função que atualiza o Valor Total em Caixa
 */

function setTotalCash(value) {
  let totalCash = document.getElementById("cash");
  return (totalCash.innerText = value);
}

/**
 *  Função que inicializa Valor Total em caixa
 */

function changeValue() {
  let value = "100,00";

  setTotalCash(value);
}

function newMain() {
  let newMain = document.getElementById("main");

  // Criar uma caixa para adição de itens
  let component = document.createElement("div");
  component.id = "box-content";
  component.className = "box-container";
  newMain.appendChild(component);
}

function handleClick() {
  const purchasing = document.querySelector("#purchasing");
  const manufacturing = document.querySelector("#manufacturing");
  const inventory = document.querySelector("#inventory");
  const sales = document.querySelector("#sales");
  const automation = document.querySelector("#automation");
  const data = document.querySelector("#data");

  purchasing.addEventListener("click", message1);
  manufacturing.addEventListener("click", message2);
  inventory.addEventListener("click", message3);
  sales.addEventListener("click", message4);
  automation.addEventListener("click", message5);
  data.addEventListener("click", message6);
}

function message1() {
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Compra";
}
function message2() {
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Fabricaçao";
}
function message3() {
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Inventário";
}
function message4() {
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Vendas";
}
function message5() {
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Automação";
}
function message6() {
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Dados";
}
