/* =========================
LISTA DE PERSONAGENS
========================= */

function mostrarPersonagens() {

    // Pega o espaço onde os personagens aparecerão
    let lista =
        document.getElementById("lista-personagens");


    // Procura os personagens salvos
    let personagens =
        localStorage.getItem("casaLumenPersonagens");


    // Caso ainda não exista nenhum personagem
    if (!personagens) {

        lista.innerHTML =
            "<p>Nenhum personagem criado.</p>";

        return;
    }


    // Transforma os dados salvos em uma lista
    personagens = JSON.parse(personagens);


    // Caso a lista esteja vazia
    if (personagens.length === 0) {

        lista.innerHTML =
            "<p>Nenhum personagem criado.</p>";

        return;
    }


    // Limpa a lista antes de mostrar os personagens
    lista.innerHTML = "";


    // Cria um card para cada personagem
    personagens.forEach(function(personagem) {

        // Cria o card
        let card =
            document.createElement("div");

        // Adiciona a classe usada pelo CSS
        card.classList.add("card-personagem");


        // Define o conteúdo do card
        card.innerHTML = `

            <h2>${personagem.nome}</h2>

            <p>
                Nível ${personagem.nivel || 1}
            </p>

            <!-- Botão para abrir o personagem -->
            <button onclick="abrirPersonagem(${personagem.id})">
                Abrir
            </button>

            <!-- Botão para excluir o personagem -->
            <button onclick="excluirPersonagem(${personagem.id})">
                Excluir
            </button>

        `;


        // Coloca o card na página
        lista.appendChild(card);

    });

}


/* =========================
ABRIR PERSONAGEM
========================= */

function abrirPersonagem(id) {

    // Guarda qual personagem deve ser aberto
    localStorage.setItem(
        "personagemAtual",
        id
    );


    // Abre a página da ficha
    window.location.href = "ficha.html";

}


/* =========================
CRIAR NOVO PERSONAGEM
========================= */

function criarPersonagem() {

    // Remove o personagem selecionado anteriormente
    localStorage.removeItem("personagemAtual");


    // Abre uma ficha nova e vazia
    window.location.href = "ficha.html";

}


/* =========================
EXCLUIR PERSONAGEM
========================= */

function excluirPersonagem(id) {

    // Pergunta se o usuário realmente deseja excluir
    let confirmarExclusao =
        confirm("Tem certeza que deseja excluir este personagem?");


    // Cancela a exclusão caso o usuário escolha "Cancelar"
    if (!confirmarExclusao) {
        return;
    }


    // Pega os personagens salvos
    let personagens =
        localStorage.getItem("casaLumenPersonagens");


    // Se não houver personagens, encerra a função
    if (!personagens) {
        return;
    }


    // Transforma os dados salvos em uma lista
    personagens = JSON.parse(personagens);


    // Cria uma nova lista sem o personagem excluído
    personagens = personagens.filter(function(personagem) {

        return String(personagem.id) !== String(id);

    });


    // Salva novamente a lista atualizada
    localStorage.setItem(
        "casaLumenPersonagens",
        JSON.stringify(personagens)
    );


    // Verifica qual personagem estava selecionado
    let personagemAtual =
        localStorage.getItem("personagemAtual");


    // Se o personagem excluído era o selecionado,
    // remove também essa seleção
    if (String(personagemAtual) === String(id)) {

        localStorage.removeItem("personagemAtual");

    }


    // Atualiza os cards mostrados na página
    mostrarPersonagens();

}


/* =========================
INÍCIO DA PÁGINA
========================= */

// Mostra os personagens ao abrir a página
mostrarPersonagens();