import viewContainer from './modules/view.js'

let menu = [];

let text = "Clique no menu para visualisar";

// Initial function
function init() {
  let links = document.querySelectorAll(".link");
  links.forEach(function (item) {
    menu.push(item.id);
  });
  viewContainer(text);

  //   console.log(products)
  changeValue();
}

// Set Initial value
function changeValue() {
  let value = '100,00'

  updateTotalCash(value)
}

// Update all total cash value
function updateTotalCash(value) {
  let totalCash = document.getElementById("cash");
  totalCash.innerText = value;
  //   console.log(totalCash.textContent);
  return totalCash.textContent;
}

document.addEventListener('click', (ev) => handleClick(ev))


function handleClick(ev) {
  let main = document.querySelector(".main");
  if (menu.includes(ev.srcElement.id) === false) {
    if (main.hasChildNodes() && main.childNodes[0].id !== ev.srcElement.id) {
      main.removeChild(main.childNodes[0]);
      console.log(main.childNodes[0].id);
      console.log(ev.srcElement.id);
      viewContainer();
      return;
    }
  }

  let txt;
  switch (ev.srcElement.id) {
    case "purchasing":
      // console.log("Compra");
      txt = "Compra";
      viewContainer(txt);
      // printPricesDiff();
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
      break;
    default:
      viewContainer(text);
      break;
  }
}

// Start script
window.onload = init()