import { products } from "./modules/products";

const menu = [];

function init() {
  let links = document.querySelectorAll(".link");
  links.forEach(function (item) {
    menu.push(item.id);
  });
  //viewContainer("Clique no menu para visualisar");

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
      viewContainer();
      return;
    }
  }

  let txt;
  switch (ev.srcElement.id) {
    case "purchasing":
      // console.log("Compra");
      txt = "Compra";
      viewContainer();
      printPricesDiff();
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
      break;
  }
}

function viewContainer() {
  let main = document.querySelector(".main");

  let viewContainer = document.createElement("div");
  viewContainer.setAttribute("class", "viewContainer");
  viewContainer.setAttribute("id", "viewContainer");

  const list = document.createElement("ul");
  list.setAttribute("id", "list");

  if (main.hasChildNodes()) {
    main.removeChild(main.childNodes[0]);
    main.appendChild(viewContainer).appendChild(list);
  } else {
    main.appendChild(viewContainer).appendChild(list);
  }

  // console.log(main.hasChildNodes());
}

function getBuyPrice(name) {
  const product = products[name];

  if (product.category !== "basic") {
    if (
      product.dependencies === undefined ||
      product.dependencies.length === 0
    ) {
      // esto no debería pasar o las dependencias o el precio de venta deben estar desde antes
      product.buy = 0.0;
    } else {
      product.buy = product.dependencies.reduce(
        (sum, req) => sum + getBuyPrice(req.name) * req.count,
        0
      );
    }
  }

  return product.buy;
}

function printPricesDiff() {
  let list = document.querySelector(".viewContainer ul");
  console.log(list);

  const round = (v) => Math.round((v + Number.EPSILON) * 100) / 100;

  for (const productName in products) {
    if (products.hasOwnProperty(productName)) {
      if (products[productName].buy === undefined) {
        getBuyPrice(productName);
      }

      const category = products[productName].category;
      const buy = round(products[productName].buy);
      const revenue = round(
        products[productName].sell - products[productName].buy
      );
      const clicks = getRequeriments(productName).clicks;
      const revenuePerClick = round(revenue / clicks);

      const item = document.createElement("li");

      let cat = document.createElement("p");
      let name = document.createElement("p");
      let b = document.createElement("p");
      let rev = document.createElement("p");
      let clk = document.createElement("p");
      let revClk = document.createElement("p");

      cat.textContent = `category: ${category}`;
      name.textContent = `name: ${productName}`;
      b.textContent = `buy: ${buy}`;
      rev.textContent = `revenue: ${revenue}`;
      clk.textContent = `clk: ${clicks}`;
      revClk.textContent = `revClk: ${revenuePerClick}`;

      item.appendChild(cat);
      item.appendChild(name);
      item.appendChild(b);
      item.appendChild(rev);
      item.appendChild(clk);
      item.appendChild(revClk);

      list.appendChild(item);
    }
  }
}

function getRequeriments(name, count = 1) {
  if (products[name].category === "basic") {
    return {
      [name]: count,
      clicks: count
    };
  } else {
    const reqs = {};
    const productDependencies = products[name].dependencies;

    for (let i = 0, length = productDependencies.length; i < length; i++) {
      const pReqs = getRequeriments(
        productDependencies[i].name,
        productDependencies[i].count * count
      );

      pReqs.clicks += productDependencies[i].count;

      for (const reqName in pReqs) {
        if (pReqs.hasOwnProperty(reqName)) {
          reqs[reqName] = (reqs[reqName] || 0) + pReqs[reqName];
        }
      }
    }

    return reqs;
  }
}

document.addEventListener("click", (ev) => handleClick(ev));

window.onload = init();
