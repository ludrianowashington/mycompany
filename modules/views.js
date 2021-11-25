// Cria uma view pra texto
function viewContainer(text) {
  let main = document.querySelector(".main");

  let viewContainer = document.createElement("div");
  viewContainer.setAttribute("class", "viewContainer");
  viewContainer.setAttribute("id", "viewContainer");

  main.innerHTML = text;
  console.log(text)
}

function viewPurchasing() {
  let main = document.querySelector('.main');

  let view = document.createElement("div");
  view.setAttribute("class", "viewPurchasing");
  view.setAttribute("id", "viewPurchasing");
}

function viewManufacturing() { }

function viewInventory() { }

function viewSales() { }

function viewAutomation() { }

function viewData() { }


export {
  viewContainer,
  viewPurchasing,
  viewAutomation,
  viewManufacturing,
  viewSales,
  viewInventory,
  viewData
};