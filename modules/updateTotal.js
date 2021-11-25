function updateTotalCash(value) {
  let totalCash = document.getElementById("cash");
  totalCash.innerText = value;
  //   console.log(totalCash.textContent);
  return totalCash.textContent;
}

export default updateTotalCash;