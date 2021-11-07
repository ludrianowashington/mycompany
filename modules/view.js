function viewContainer(text) {
  let main = document.querySelector(".main");

  let viewContainer = document.createElement("div");
  viewContainer.setAttribute("class", "viewContainer");
  viewContainer.setAttribute("id", "viewContainer");

  main.innerHTML = text;
  console.log(text)
}

export default viewContainer;