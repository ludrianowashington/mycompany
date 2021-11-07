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
