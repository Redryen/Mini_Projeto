var cores = ["#6cbaff", "#6cff8f", "#c86cff"]; // Azul, Verde, Roxo
var indiceCor = 0;

function adicionarNota() {
  var texto = document.getElementById("textoNota").value;
  var divContainer = document.getElementById("container");
  var urgenciaSelecionada = document.querySelector('input[name="urgencia"]:checked').value;

  if (texto.trim() === "") {
    alert("Digite algo antes de adicionar!");
    return;
  }

  var novaNota = document.createElement("div");
  novaNota.classList.add("nota");

  // Fundo segue a sequência azul → verde → roxo
  novaNota.style.backgroundColor = cores[indiceCor];
  indiceCor = (indiceCor + 1) % cores.length;

  // Define cor do texto conforme urgência
  if (urgenciaSelecionada === "sim") {
    novaNota.classList.add("urgente");
  } else {
    novaNota.classList.add("nao-urgente");
  }

  var textoNota = document.createElement("span");
  textoNota.innerText = texto;

  var botaoRemover = document.createElement("button");
  botaoRemover.innerText = "Remover";
  botaoRemover.onclick = function() {
    novaNota.remove();
  };

  novaNota.appendChild(textoNota);
  novaNota.appendChild(botaoRemover);
  divContainer.appendChild(novaNota);

  document.getElementById("textoNota").value = "";
}

function apagarTudo() {
  var container = document.getElementById("container");
  container.innerHTML = "";
}
