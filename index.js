// Iniciando quando a janela é carregada

window.onload = initialization();

/**
 *  Função que carrega o necessário para a apliação
 */

function initialization() {
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

/**
 *  Função que manipula evento de 'click' no menu
 */

function handleClick() {
  const purchasing = document.querySelector("#purchasing");
  const manufacturing = document.querySelector("#manufacturing");
  const inventory = document.querySelector("#inventory");
  const sales = document.querySelector("#sales");
  const automation = document.querySelector("#automation");
  const data = document.querySelector("#data");

  purchasing.addEventListener("click", setPurchansing, false);
  manufacturing.addEventListener("click", message2, false);
  inventory.addEventListener("click", message3, false);
  sales.addEventListener("click", message4, false);
  automation.addEventListener("click", message5, false);
  data.addEventListener("click", message6, false);
}

/**
 *  Cria um novo elemento 'div'
 */

function newMain(color) {
  let newMain = document.getElementById("main");

  if (!newMain.hasChildNodes()) {
    // Criar uma caixa para adição de itens
    let component = document.createElement("div");
    component.id = "box-content";
    component.className = "box-container";

    component.style.backgroundColor = color;
    newMain.appendChild(component);
  }

  if (newMain.hasChildNodes()) {
    let comp = document.querySelector("#box-content");
    comp.style.backgroundColor = color;
  }
}

function setPurchansing(ev) {
  newMain("#9fd6d6");
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Compra";
}
function message2(ev) {
  newMain("#a442d6");
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Fabricaçao";
}
function message3(ev) {
  const color = "#8d30f5";
  newMain();
  newMain("#9fd556");
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Inventário";
}
function message4(ev) {
  const color = "#8d30f5";
  newMain();
  newMain("#9f7886");
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Vendas";
}
function message5(ev) {
  const color = "#8d30f5";
  newMain();
  newMain("#9fdda6");
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Automação";
}
function message6(ev) {
  const color = "#8d30f5";
  newMain();
  const msg = document.querySelector(".box-container");

  msg.innerHTML = "Dados";
}
