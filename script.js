var cores = ["#6cbaff", "#6cff8f", "#c86cff"]
var indiceCor = 0

function adicionarNota() {
  var texto = document.getElementById("textoNota").value
  var divContainer = document.getElementById("container")
  var urgenciaSelecionada = document.querySelector('input[name="urgencia"]:checked').value

  var novaNota = document.createElement("div")
  novaNota.classList.add("nota")

  novaNota.style.backgroundColor = cores[indiceCor]
  indiceCor = (indiceCor + 1) % cores.length

  if (urgenciaSelecionada == "sim") {
    novaNota.classList.add("urgente")
    document.getElementById("divUrgentes").appendChild(novaNota)
  } else {
    novaNota.classList.add("naoUrgente")
    document.getElementById("divNaoUrgentes").appendChild(novaNota)
  }

  novaNota.innerText = texto

  divContainer.appendChild(novaNota);

  document.getElementById("textoNota").value = ""
}

function apagarTudo() {
  var container = document.getElementById("container")
  container.innerHTML = ""
}

function removerUltimaNota() {
  var container = document.getElementById("container")
  var ultNota = container.lastElementChild
    container.removeChild(ultNota)
}
