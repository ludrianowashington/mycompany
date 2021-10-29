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
    default: break;
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

var products = {
  carboard: {
    sell: 0.18,
    buy: 0.24,
    category: "basic",
  },
  concrete: {
    sell: 3.14,
    buy: 4.19,
    category: "basic",
  },
  magnet: {
    sell: 4.26,
    buy: 5.68,
    category: "basic",
  },
  metal: {
    sell: 2.55,
    buy: 3.4,
    category: "basic",
  },
  paint: {
    sell: 1.7,
    buy: 2.26,
    category: "basic",
  },
  plastic: {
    sell: 0.45,
    buy: 0.6,
    category: "basic",
  },
  "rare metal": {
    sell: 5.86,
    buy: 7.81,
    category: "basic",
  },
  rubber: {
    sell: 0.83,
    buy: 1.1,
    category: "basic",
  },
  wire: {
    sell: 1.28,
    buy: 1.71,
    category: "basic",
  },
  "adv concrete": {
    sell: 14.47,
    category: "tier 1",
    dependencies: [
      { name: "concrete", count: 2 },
      { name: "metal", count: 2 },
    ],
  },
  belt: {
    sell: 2.6,
    category: "tier 1",
    dependencies: [{ name: "rubber", count: 2 }],
  },
  box: {
    sell: 2.21,
    category: "tier 1",
    dependencies: [{ name: "carboard", count: 4 }],
  },
  cable: {
    sell: 3.28,
    category: "tier 1",
    dependencies: [{ name: "metal", count: 1 }],
  },
  circuit: {
    sell: 3.54,
    category: "tier 1",
    dependencies: [
      { name: "plastic", count: 2 },
      { name: "wire", count: 1 },
    ],
  },
  gear: {
    sell: 6.56,
    category: "tier 1",
    dependencies: [{ name: "metal", count: 2 }],
  },
  hose: {
    sell: 2.6,
    category: "tier 1",
    dependencies: [{ name: "rubber", count: 2 }],
  },
  "metal wheel": {
    sell: 6.56,
    category: "tier 1",
    dependencies: [{ name: "metal", count: 2 }],
  },
  motor: {
    sell: 17.4,
    category: "tier 1",
    dependencies: [
      { name: "magnet", count: 2 },
      { name: "metal", count: 1 },
      { name: "wire", count: 2 },
    ],
  },
  "plastic wheel": {
    sell: 1.72,
    category: "tier 1",
    dependencies: [{ name: "plastic", count: 2 }],
  },
  pump: {
    sell: 8.72,
    category: "tier 1",
    dependencies: [
      { name: "metal", count: 2 },
      { name: "plastic", count: 1 },
      { name: "rubber", count: 1 },
    ],
  },
  "garden gnome": {
    sell: 15.9,
    category: "tier 1",
    dependencies: [
      { name: "concrete", count: 1 },
      { name: "paint", count: 1 },
      { name: "box", count: 1 },
    ],
  },
  speakers: {
    sell: 29.42,
    category: "tier 1",
    dependencies: [
      { name: "magnet", count: 2 },
      { name: "plastic", count: 2 },
      { name: "wire", count: 1 },
      { name: "box", count: 1 },
    ],
  },
  toaster: {
    sell: 22.74,
    category: "tier 1",
    dependencies: [
      { name: "metal", count: 2 },
      { name: "wire", count: 2 },
      { name: "box", count: 1 },
    ],
  },
  "air gun": {
    sell: 19.78,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 4 },
      { name: "hose", count: 2 },
    ],
  },
  arm: {
    sell: 51.68,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 2 },
      { name: "circuit", count: 1 },
      { name: "motor", count: 2 },
    ],
  },
  conveyor: {
    sell: 102.58,
    category: "tier 2",
    dependencies: [
      { name: "belt", count: 1 },
      { name: "gear", count: 2 },
      { name: "metal wheel", count: 8 },
      { name: "motor", count: 1 },
    ],
  },
  lifter: {
    sell: 55.46,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 3 },
      { name: "cable", count: 2 },
      { name: "hose", count: 2 },
      { name: "motor", count: 1 },
      { name: "pump", count: 1 },
    ],
  },
  "logic unit": {
    sell: 26.75,
    category: "tier 2",
    dependencies: [
      { name: "wire", count: 5 },
      { name: "circuit", count: 4 },
    ],
  },
  mover: {
    sell: 113.65,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 3 },
      { name: "gear", count: 4 },
      { name: "metal wheel", count: 4 },
      { name: "motor", count: 2 },
    ],
  },
  road: {
    sell: 49.8,
    category: "tier 2",
    dependencies: [
      { name: "concrete", count: 4 },
      { name: "adv concrete", count: 2 },
    ],
  },
  support: {
    sell: 40.53,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 2 },
      { name: "adv concrete", count: 2 },
    ],
  },
  "thing-a-ma-jig": {
    sell: 61.02,
    category: "tier 2",
    dependencies: [
      { name: "circuit", count: 3 },
      { name: "hose", count: 2 },
      { name: "motor", count: 1 },
      { name: "pump", count: 2 },
    ],
  },
  widget: {
    sell: 14.78,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 1 },
      { name: "plastic", count: 4 },
      { name: "wire", count: 2 },
      { name: "circuit", count: 1 },
    ],
  },
  "toy car": {
    sell: 35.38,
    category: "tier 2",
    dependencies: [
      { name: "metal", count: 1 },
      { name: "paint", count: 1 },
      { name: "plastic", count: 3 },
      { name: "plastic wheel", count: 4 },
      { name: "box", count: 1 },
    ],
  },
  "water gun": {
    sell: 29.62,
    category: "tier 2",
    dependencies: [
      { name: "paint", count: 1 },
      { name: "plastic", count: 6 },
      { name: "hose", count: 2 },
      { name: "box", count: 1 },
    ],
  },
  "adv logic unit": {
    sell: 87.15,
    category: "tier 3",
    dependencies: [
      { name: "wire", count: 4 },
      { name: "circuit", count: 4 },
      { name: "logic unit", count: 2 },
    ],
  },
  "assembly line": {
    sell: 715.84,
    category: "tier 3",
    dependencies: [
      { name: "air gun", count: 2 },
      { name: "arm", count: 2 },
      { name: "conveyor", count: 3 },
      { name: "lifter", count: 1 },
      { name: "mover", count: 1 },
    ],
  },
  "jet engine": {
    sell: 180.04,
    category: "tier 3",
    dependencies: [
      { name: "metal", count: 8 },
      { name: "wire", count: 12 },
      { name: "hose", count: 6 },
      { name: "pump", count: 4 },
      { name: "thing-a-ma-jig", count: 1 },
    ],
  },
  sensor: {
    sell: 51.51,
    category: "tier 3",
    dependencies: [
      { name: "rare metal", count: 2 },
      { name: "wire", count: 1 },
      { name: "circuit", count: 1 },
      { name: "logic unit", count: 1 },
    ],
  },
  brigde: {
    sell: 1091.16,
    category: "tier 3",
    dependencies: [
      { name: "road", count: 6 },
      { name: "support", count: 6 },
    ],
  },
  forklift: {
    sell: 198.04,
    category: "tier 3",
    dependencies: [
      { name: "metal", count: 6 },
      { name: "rubber", count: 8 },
      { name: "metal wheel", count: 4 },
      { name: "motor", count: 2 },
      { name: "box", count: 4 },
    ],
  },
  "radio tower": {
    sell: 414,
    category: "tier 3",
    dependencies: [
      { name: "metal", count: 12 },
      { name: "wire", count: 6 },
      { name: "support", count: 4 },
    ],
  },
  "tablet computer": {
    sell: 93.14,
    category: "tier 3",
    dependencies: [
      { name: "plastic", count: 1 },
      { name: "wire", count: 3 },
      { name: "circuit", count: 3 },
      { name: "logic unit", count: 1 },
      { name: "box", count: 1 },
    ],
  },
  drone: {
    sell: 542.06,
    category: "tier 4",
    dependencies: [
      { name: "plastic", count: 4 },
      { name: "rare metal", count: 1 },
      { name: "motor", count: 4 },
      { name: "adv logic unit", count: 1 },
      { name: "sensor", count: 2 },
    ],
  },
  jet: {
    sell: 3514.76,
    category: "tier 4",
    dependencies: [
      { name: "metal", count: 24 },
      { name: "wire", count: 18 },
      { name: "adv logic unit", count: 6 },
      { name: "jet engine", count: 4 },
      { name: "sensor", count: 8 },
    ],
  },
  "oculus rift": {
    sell: 307.84,
    category: "tier 4",
    dependencies: [
      { name: "plastic", count: 2 },
      { name: "rare metal", count: 2 },
      { name: "wire", count: 4 },
      { name: "widget", count: 2 },
      { name: "sensor", count: 2 },
    ],
  },
  "builder tier 1": {
    sell: 328.74,
    category: "builder",
    dependencies: [
      { name: "motor", count: 1 },
      { name: "arm", count: 2 },
      { name: "conveyor", count: 1 },
      { name: "thing-a-ma-jig", count: 1 },
    ],
  },
  "builder tier 2": {
    sell: 423.2,
    category: "builder",
    dependencies: [
      { name: "motor", count: 1 },
      { name: "arm", count: 3 },
      { name: "conveyor", count: 1 },
      { name: "thing-a-ma-jig", count: 1 },
      { name: "widget", count: 2 },
    ],
  },
  "builder tier 3": {
    sell: 994.55,
    category: "builder",
    dependencies: [
      { name: "logic unit", count: 1 },
      { name: "thing-a-ma-jig", count: 1 },
      { name: "widget", count: 4 },
      { name: "assembly line", count: 1 },
    ],
  },
  "builder tier 4": {
    sell: 1416.87,
    category: "builder",
    dependencies: [
      { name: "widget", count: 2 },
      { name: "adv logic unit", count: 2 },
      { name: "assembly line", count: 1 },
      { name: "sensor", count: 6 },
    ],
  },
  "builder builders": {
    sell: 1273.64,
    category: "builder",
    dependencies: [
      { name: "arm", count: 2 },
      { name: "logic unit", count: 1 },
      { name: "thing-a-ma-jig", count: 4 },
      { name: "widget", count: 1 },
      { name: "assembly line", count: 1 },
    ],
  },
  "builder taskers": {
    sell: 1099.85,
    category: "builder",
    dependencies: [
      { name: "thing-a-ma-jig", count: 2 },
      { name: "widget", count: 2 },
      { name: "adv logic unit", count: 1 },
      { name: "assembly line", count: 1 },
    ],
  },
  "builder universal": {
    sell: 2297.77,
    category: "builder",
    dependencies: [
      { name: "arm", count: 4 },
      { name: "thing-a-ma-jig", count: 2 },
      { name: "widget", count: 4 },
      { name: "adv logic unit", count: 2 },
      { name: "assembly line", count: 2 },
    ],
  },
  "tasker purchasing": {
    sell: 79.32,
    category: "tasker",
    dependencies: [
      { name: "paint", count: 1 },
      { name: "wire", count: 6 },
      { name: "circuit", count: 4 },
      { name: "logic unit", count: 1 },
      { name: "widget", count: 1 },
    ],
  },
  "tasker sales": {
    sell: 196.96,
    category: "tasker",
    dependencies: [
      { name: "paint", count: 1 },
      { name: "wire", count: 8 },
      { name: "logic unit", count: 2 },
      { name: "widget", count: 1 },
      { name: "adv logic unit", count: 1 },
    ],
  },
};

function getBuyPrice(name) {
  const product = products[name];

  if (product.category != "basic") {
    if (product.dependencies == undefined || product.dependencies.length == 0) {
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
      if (products[productName].buy == undefined) {
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
  if (products[name].category == "basic") {
    return {
      [name]: count,
      clicks: count,
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
