window.onload = initialization();

/**
 *  Função que atualiza o Valor Total em Caixa
 */

function setTotalCash(value) {
  let totalCash = document.getElementById("cash");

  return (totalCash.innerText = value);
  // window.location.reload(false);
}

/**
 *  Função que carrega o necessário para a aplicação
 */

function changeValue() {
  let value = "100,00";

  setTotalCash(value);
  return data;
}

function initialization() {
  newMain();
  changeValue();
}

function newMain() {
  let newMain = document.getElementById("main");
  // Criar uma caixa para adição de itens
  let component = document.createElement("div");
  component.id = "box-content";
  component.className = "box-container";

  newMain.appendChild(component);
  menuBar();
}

function newComp(link, id) {
  let linka = link;
  let inf = id;
  let comp = document.createElement("p");
  linka.appendChild(comp);
}

function menuBar(view) {
  let linkado = document.querySelector("#box-content");
  let links = document.querySelectorAll(".link");
  let test;
  let i;
  for (i = 0; i < links.length; i++) {
    test = links.item(i).id;
    return newComp(linkado, test);
  }
}
