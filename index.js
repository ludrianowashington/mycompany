const menu = [];

function init() {
  let links = document.querySelectorAll(".link");
  links.forEach(function (item) {
    menu.push(item.id);
  });
  viewContainer("Clique no menu para visualisar");

  changeValue();
}

function changeValue() {
  let value = "100,00";

  updateTotalCash(value);
}

function updateTotalCash(value) {
  let totalCash = document.getElementById("cash");
  console.log(totalCash.textContent);
  return (totalCash.innerText = value);
}

function handleClick(ev) {
  let main = document.querySelector(".main");
  if (menu.includes(ev.srcElement.id) === false) {
    if (main.hasChildNodes() && main.childNodes[0].id !== ev.srcElement.id) {
      main.removeChild(main.childNodes[0]);
      // console.log(main.childNodes[0].id);
      // console.log(ev.srcElement.id);
      viewContainer("Clicou fora!! Clique no menu para visualisar");
      return;
    }
  }

  let txt;
  switch (ev.srcElement.id) {
    case "purchasing":
      // console.log("Compra");
      txt = "Compra";
      viewContainer(txt);
      break;
    case "manufacturing":
      // console.log("Fabricação");
      txt = "Fabricação";
      viewContainer(txt);
      break;
    case "inventory":
      // console.log("Inventário");
      txt = "Inventário";
      viewContainer(txt);
      break;
    case "sales":
      // console.log("Vendas");
      txt = "Vendas";
      viewContainer(txt);
      break;
    case "automation":
      // console.log("Automação");
      txt = "Automação";
      viewContainer(txt);
      break;
    case "data":
      // console.log("Dados");
      txt = "Dados";
      viewContainer(txt);
  }
}

function viewContainer(txt) {
  let main = document.querySelector(".main");

  let viewContainer = document.createElement("div");
  viewContainer.setAttribute("class", "viewContainer");
  viewContainer.setAttribute("id", "viewContainer");

  let textNode = document.createTextNode(txt);

  if (main.hasChildNodes()) {
    main.removeChild(main.childNodes[0]);
    main.appendChild(viewContainer).appendChild(textNode);
  } else {
    main.appendChild(viewContainer).appendChild(textNode);
  }

  // console.log(main.hasChildNodes());
}

document.addEventListener("click", (ev) => handleClick(ev));

window.onload = init();
