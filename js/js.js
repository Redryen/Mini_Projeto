let notas = [];

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


function renderizarNotas() {
    const notasContainer = document.getElementById('notasContainer');
    notasContainer.innerHTML = ""; 

 
    notas.forEach((nota, index) => {
        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota');
        

        if (nota.urgente) {
            notaDiv.classList.add('urgente');
        } else {
            notaDiv.classList.add('naourgente');
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

function removerNota(index) {
    notas.splice(index, 1);

    renderizarNotas();
}
