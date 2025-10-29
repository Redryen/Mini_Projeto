// Array para armazenar as notas
let notas = [];

// Função para adicionar uma nova nota
function adicionar() {
    const notaInput = document.getElementById('nota');
    const textoNota = notaInput.value.trim();

    // Verifica se o campo de texto está vazio
    if (textoNota === "") {
        alert("Por favor, insira uma nota.");
        return;
    }

    // Identifica se a nota é urgente ou não
    const urgente = document.querySelector('input[name="urgencia"]:checked')?.value === "urgente";

    // Cria um objeto para a nota
    const nota = {
        texto: textoNota,
        urgente: urgente
    };

    // Adiciona a nota ao array
    notas.push(nota);
    
    // Limpa o campo de texto após adicionar
    notaInput.value = "";
    
    // Atualiza a renderização das notas
    renderizarNotas();
}

// Função para renderizar as notas
function renderizarNotas() {
    const notasContainer = document.getElementById('notasContainer');
    notasContainer.innerHTML = ""; // Limpa as notas atuais

    // Cores cíclicas: Azul, Verde, Roxo
    const cores = ['azul', 'verde', 'roxo'];

    // Adiciona cada nota ao container
    notas.forEach((nota, index) => {
        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota');
        
        // Adiciona a classe de cor de acordo com a urgência
        if (nota.urgente) {
            notaDiv.classList.add('urgente');
        } else {
            // Ciclo das cores: Azul, Verde, Roxo
            notaDiv.classList.add(cores[index % 3]);
        }

        // Adiciona o texto da nota
        const textoNota = document.createElement('span');
        textoNota.textContent = nota.texto;

        // Botão para remover a nota
        const removerBtn = document.createElement('button');
        removerBtn.textContent = "Remover";
        removerBtn.onclick = () => removerNota(index);

        // Adiciona os elementos na div da nota
        notaDiv.appendChild(textoNota);
        notaDiv.appendChild(removerBtn);
        
        // Adiciona a div da nota no container
        notasContainer.appendChild(notaDiv);
    });
}

// Função para remover uma nota
function removerNota(index) {
    // Remove a nota do array
    notas.splice(index, 1);

    // Atualiza a renderização das notas
    renderizarNotas();
}

// Função para apagar todas as notas
function apagarTudo() {
    notas = [];  // Limpa o array de notas
    renderizarNotas();  // Atualiza a renderização das notas
}
