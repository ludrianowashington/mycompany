window.onload = changeValue();

/**
 *  Função que atualiza o Valor Total em Caixa
 */

function setTotalCash(value) {
  let totalCash = document.getElementById("cash");

  return (totalCash.innerText = value);
  window.location.reload(true);
}

/**
 *  Função que carrega o necessário para a aplicação
 */

function changeValue() {
  let value = "100,00";

  setTotalCash(value);

  return data;
}
