// Array para armazenar as notas
let notas = [];

// Função para adicionar uma nova nota
function adicionar() {
    const notaInput = document.getElementById('nota');
    const textoNota = notaInput.value.trim();

    if (textoNota === "") {
        alert("Por favor, insira uma nota.");
        return;
    }

    const urgente = document.querySelector('input[name="urgencia"]:checked').value === "urgente";

    const nota = {
        texto: textoNota,
        urgente: urgente
    };

    notas.push(nota);
    notaInput.value = "";
    renderizarNotas();
}

// Função para renderizar as notas
function renderizarNotas() {
    const notasContainer = document.getElementById('notasContainer');
    notasContainer.innerHTML = "";

    const cores = ['azul', 'verde', 'roxo'];

    notas.forEach((nota, index) => {
        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota');

        if (nota.urgente) {
            notaDiv.classList.add('urgente');
        } else {
            notaDiv.classList.add(cores[index % 3]);
        }

        const textoNota = document.createElement('span');
        textoNota.textContent = nota.texto;

        const removerBtn = document.createElement('button');
        removerBtn.textContent = "Remover";
        removerBtn.onclick = () => removerNota(index);

        notaDiv.appendChild(textoNota);
        notaDiv.appendChild(removerBtn);
        notasContainer.appendChild(notaDiv);
    });
}

// Função para remover uma nota
function removerNota(index) {
    notas.splice(index, 1);
    renderizarNotas();
}

// Função para apagar todas as notas
function apagarTudo() {
    notas = [];
    renderizarNotas();
}
