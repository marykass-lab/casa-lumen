/* =========================
ROLAGEM DE DADOS
========================= */

function rolarDado(idAtributo) {

    // Pega o valor do atributo
    let atributo = Number(
        document.getElementById(idAtributo).value
    );

    // Rola 2 dados de 6 lados
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Soma 2d6 + atributo
    let total = dado1 + dado2 + atributo;

    // Mostra o resultado
    document.getElementById("resultado").textContent =
        total;

    // Mostra os detalhes da rolagem
    document.getElementById(
        "detalhes-rolagem"
    ).textContent =
        dado1 + " + " + dado2 + " + " + atributo;
}


/* =========================
PONTOS DE VIDA
========================= */

// Guarda os PV atuais
let vidaAtual = 0;

// Guarda os PV máximos
let vidaMaxima = 0;


/* =========================
CALCULAR VIDA
========================= */

function calcularVida() {

    // Pega o valor de Corpo
    let atributo1 = Number(
        document.getElementById("atributo1").value
    );

    // Calcula Corpo × 10
    vidaMaxima = atributo1 * 10;

    // Coloca os PV atuais no máximo
    vidaAtual = vidaMaxima;

    // Mostra os PV atuais
    document.getElementById(
        "vida-atual"
    ).textContent = vidaAtual;

    // Mostra os PV máximos
    document.getElementById(
        "vida-maxima"
    ).textContent = vidaMaxima;
}


/* =========================
ALTERAR VIDA
========================= */

function alterarVida(valor) {

    // Soma ou diminui os PV
    vidaAtual = vidaAtual + valor;

    // Impede PV abaixo de zero
    if (vidaAtual < 0) {
        vidaAtual = 0;
    }

    // Impede PV acima do máximo
    if (vidaAtual > vidaMaxima) {
        vidaAtual = vidaMaxima;
    }

    // Atualiza os PV mostrados
    document.getElementById(
        "vida-atual"
    ).textContent = vidaAtual;
}

/* =========================
PONTOS DE LÚMEN
========================= */

// Guarda os Pontos de Lúmen atuais
let lumenAtual = 0;

// Guarda os Pontos de Lúmen máximos
let lumenMaximo = 0;


/* =========================
CALCULAR LÚMEN
========================= */

function calcularLumen() {

    // Pega o valor do atributo Lúmen
    let atributo4 = Number(
        document.getElementById("atributo4").value
    );

    // Calcula Lúmen × 10
    lumenMaximo = atributo4 * 10;

    // Coloca os Pontos de Lúmen atuais no máximo
    lumenAtual = lumenMaximo;

    // Mostra o Lúmen atual
    document.getElementById(
        "lumen-atual"
    ).textContent = lumenAtual;

    // Mostra o Lúmen máximo
    document.getElementById(
        "lumen-maximo"
    ).textContent = lumenMaximo;
}


/* =========================
ALTERAR LÚMEN
========================= */

function alterarLumen(valor) {

    // Soma ou diminui os Pontos de Lúmen
    lumenAtual = lumenAtual + valor;

    // Impede Lúmen abaixo de zero
    if (lumenAtual < 0) {
        lumenAtual = 0;
    }

    // Impede Lúmen acima do máximo
    if (lumenAtual > lumenMaximo) {
        lumenAtual = lumenMaximo;
    }

    // Atualiza o Lúmen mostrado
    document.getElementById(
        "lumen-atual"
    ).textContent = lumenAtual;
}

/* =========================
PONTOS DE TENSÃO
========================= */

// Guarda os Pontos de Tensão atuais
let tensaoAtual = 0;


/* =========================
ALTERAR TENSÃO
========================= */

function alterarTensao(valor) {

    // Soma ou diminui os Pontos de Tensão
    tensaoAtual = tensaoAtual + valor;

    // Impede a Tensão de ficar abaixo de zero
    if (tensaoAtual < 0) {
        tensaoAtual = 0;
    }

    // Impede a Tensão de passar de 10
    if (tensaoAtual > 10) {
        tensaoAtual = 10;
    }

    // Atualiza a Tensão mostrada na ficha
    document.getElementById(
        "tensao-atual"
    ).textContent = tensaoAtual;
}

/* =========================
PERÍCIAS
========================= */

function rolarPericia(idPericia) {

    // Pega os pontos da perícia
    let bonusPericia = Number(
        document.getElementById(idPericia).value
    );

    // Rola 2 dados de 6 lados
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcula 2d6 + perícia
    let total =
        dado1 +
        dado2 +
        bonusPericia;

    // Mostra o resultado
    document.getElementById(
        "resultado"
    ).textContent = total;

    // Mostra os detalhes
    document.getElementById(
        "detalhes-rolagem"
    ).textContent =
        dado1 +
        " + " +
        dado2 +
        " + " +
        bonusPericia;
}


/* =========================
ROLAGEM COMBINADA
========================= */

function rolarCombinado() {

    // Descobre qual perícia foi escolhida
    let idPericia =
        document.getElementById(
            "pericia-selecionada"
        ).value;

    // Descobre qual atributo foi escolhido
    let idAtributo =
        document.getElementById(
            "atributo-selecionado"
        ).value;

    // Valores iniciais
    let bonusPericia = 0;
    let bonusAtributo = 0;


    // Pega o bônus da perícia
    if (idPericia !== "") {

        bonusPericia = Number(
            document.getElementById(
                idPericia
            ).value
        );
    }


    // Pega o bônus do atributo
    if (idAtributo !== "") {

        bonusAtributo = Number(
            document.getElementById(
                idAtributo
            ).value
        );
    }


    // Rola 2d6
    let dado1 =
        Math.floor(Math.random() * 6) + 1;

    let dado2 =
        Math.floor(Math.random() * 6) + 1;


    // Calcula o resultado
    let total =
        dado1 +
        dado2 +
        bonusPericia +
        bonusAtributo;


    // Mostra o resultado
    document.getElementById(
        "resultado"
    ).textContent = total;


    // Mostra os detalhes
    document.getElementById(
        "detalhes-rolagem"
    ).textContent =
        dado1 +
        " + " +
        dado2 +
        " + Perícia (" +
        bonusPericia +
        ") + Atributo (" +
        bonusAtributo +
        ")";
}


/* =========================
PODERES E MAGIAS
========================= */

function adicionarPoder(nome = "", descricao = "") {

    // Pega a lista de poderes
    let listaPoderes =
        document.getElementById(
            "lista-poderes"
        );

    // Cria um novo poder
    let novoPoder =
        document.createElement("div");

    // Adiciona a classe do CSS
    novoPoder.classList.add("poder");


    // Cria os campos do poder
    novoPoder.innerHTML = `

        <!-- Nome do poder -->
        <input
            type="text"
            class="nome-poder"
            placeholder="Nome do poder"
        >

        <!-- Descrição do poder -->
        <textarea
            class="descricao-poder"
            placeholder="Descrição ou efeito do poder"
        ></textarea>

        <!-- Botão para remover -->
        <button
            class="botao-remover-poder"
            onclick="removerPoder(this)"
        >
            Remover
        </button>

    `;


    // Coloca o poder na ficha
    listaPoderes.appendChild(novoPoder);

    // Coloca o nome salvo no campo
    novoPoder.querySelector(
        ".nome-poder"
    ).value = nome;


    // Coloca a descrição salva no campo
    novoPoder.querySelector(
        ".descricao-poder"
    ).value = descricao;
}


/* =========================
REMOVER PODER
========================= */

function removerPoder(botao) {

    // Encontra o poder
    let poder = botao.parentElement;

    // Remove o poder
    poder.remove();
}


/* =========================
INVENTÁRIO
========================= */

function adicionarItem(
    nome = "",
    quantidade = 1,
    descricao = ""
) {

    // Pega a lista de itens
    let listaItens =
        document.getElementById(
            "lista-itens"
        );

    // Cria um novo item
    let novoItem =
        document.createElement("div");

    // Adiciona a classe do CSS
    novoItem.classList.add("item");


    // Cria os campos do item
    novoItem.innerHTML = `

        <!-- Nome do item -->
        <input
            type="text"
            class="nome-item"
            placeholder="Nome do item"
        >

        <!-- Quantidade -->
        <input
            type="number"
            class="quantidade-item"
            value="1"
            min="1"
        >

        <!-- Descrição do item -->
    <textarea
    class="descricao-item"
    placeholder="Descrição"
></textarea>

        <!-- Botão para remover -->
        <button
            class="botao-remover-item"
            onclick="removerItem(this)"
        >
            Remover
        </button>

    `;


    // Coloca o item no inventário
    listaItens.appendChild(novoItem);

        // Coloca o nome salvo no campo
    novoItem.querySelector(
        ".nome-item"
    ).value = nome;


    // Coloca a quantidade salva no campo
    novoItem.querySelector(
        ".quantidade-item"
    ).value = quantidade;


    // Coloca a descrição salva no campo
    novoItem.querySelector(
        ".descricao-item"
    ).value = descricao;
}


/* =========================
REMOVER ITEM
========================= */

function removerItem(botao) {

    // Encontra o item
    let item = botao.parentElement;

    // Remove o item
    item.remove();
}


/* =========================
SALVAR PERSONAGEM
========================= */

function salvarFicha() {

    // Seleciona os campos da ficha que possuem ID
    let campos =
        document.querySelectorAll(
            "input[id], select[id], textarea[id]"
        );


    // Cria o objeto que guardará a ficha
    let dadosFicha = {};


    // Guarda cada campo da ficha
    campos.forEach(function(campo) {

        dadosFicha[campo.id] =
            campo.value;
    });


    /* =========================
    SALVAR PONTOS DE VIDA
    ========================= */

    // Guarda os PV atuais
    dadosFicha.vidaAtual =
        vidaAtual;

/* =========================
    SALVAR PONTOS DE LÚMEN
========================= */

// Salva a quantidade atual de Pontos de Lúmen
dadosFicha.lumenAtual = lumenAtual;


/* =========================
    SALVAR PONTOS DE TENSÃO
========================= */

// Salva a quantidade atual de Pontos de Tensão
dadosFicha.tensaoAtual = tensaoAtual;

    /* =========================
    SALVAR PODERES E MAGIAS
    ========================= */

    // Cria uma lista para guardar os poderes
    let poderes = [];


    // Procura todos os poderes adicionados na ficha
    document.querySelectorAll(
        ".poder"
    ).forEach(function(poder) {

        // Pega o nome do poder
        let nomePoder =
            poder.querySelector(
                ".nome-poder"
            ).value;


        // Pega a descrição do poder
        let descricaoPoder =
            poder.querySelector(
                ".descricao-poder"
            ).value;


        // Guarda o poder na lista
        poderes.push({

            nome: nomePoder,

            descricao: descricaoPoder

        });

    /* =========================
    SALVAR INVENTÁRIO
    ========================= */

    // Cria uma lista para guardar os itens
    let inventario = [];


    // Procura todos os itens adicionados na ficha
    document.querySelectorAll(
        ".item"
    ).forEach(function(item) {

        // Pega o nome do item
        let nomeItem =
            item.querySelector(
                ".nome-item"
            ).value;


        // Pega a quantidade do item
        let quantidadeItem =
            item.querySelector(
                ".quantidade-item"
            ).value;


        // Pega a descrição do item
        let descricaoItem =
            item.querySelector(
                ".descricao-item"
            ).value;


        // Guarda o item na lista
        inventario.push({

            nome: nomeItem,

            quantidade: quantidadeItem,

            descricao: descricaoItem

        });

    });


    // Guarda o inventário
    // dentro dos dados do personagem
    dadosFicha.inventario =
        inventario;

    });


    // Guarda a lista de poderes
    // dentro dos dados do personagem
    dadosFicha.poderes =
        poderes;


    /* =========================
    VERIFICAR NOME
    ========================= */

    // Pega o nome do personagem
    let nomePersonagem =
        document.getElementById(
            "nome"
        ).value;


    // Impede personagem sem nome
    if (nomePersonagem.trim() === "") {

        document.getElementById(
            "status-salvamento"
        ).textContent =
            "Digite o nome do personagem.";

        return;
    }


    /* =========================
    PEGAR PERSONAGENS SALVOS
    ========================= */

    // Procura os personagens no navegador
    let personagensSalvos =
        localStorage.getItem(
            "casaLumenPersonagens"
        );


    // Converte os dados em uma lista
    if (personagensSalvos) {

        personagensSalvos =
            JSON.parse(
                personagensSalvos
            );

    } else {

        personagensSalvos = [];
    }


    /* =========================
    VERIFICAR PERSONAGEM ATUAL
    ========================= */

    // Descobre se estamos editando alguém
    let idPersonagem =
        localStorage.getItem(
            "personagemAtual"
        );


    /* =========================
    ATUALIZAR PERSONAGEM
    ========================= */

    if (idPersonagem) {

        // Procura o personagem na lista
        let indicePersonagem =
            personagensSalvos.findIndex(
                function(personagem) {

                    return String(
                        personagem.id
                    ) === String(
                        idPersonagem
                    );
                }
            );


        // Atualiza se encontrar
        if (indicePersonagem !== -1) {

            // Mantém o mesmo ID
            dadosFicha.id =
                personagensSalvos[
                    indicePersonagem
                ].id;

            // Substitui os dados antigos
            personagensSalvos[
                indicePersonagem
            ] = dadosFicha;

        } else {

            /* =========================
            RECUPERAÇÃO DE ID
            ========================= */

            // Caso o ID antigo não exista mais,
            // cria o personagem como uma nova ficha
            idPersonagem = Date.now();

            // Guarda o novo ID
            dadosFicha.id =
                idPersonagem;

            // Adiciona à lista
            personagensSalvos.push(
                dadosFicha
            );
        }

    } else {

        /* =========================
        CRIAR NOVO PERSONAGEM
        ========================= */

        // Cria um ID único
        idPersonagem = Date.now();

        // Guarda o ID na ficha
        dadosFicha.id =
            idPersonagem;

        // Adiciona o personagem
        personagensSalvos.push(
            dadosFicha
        );
    }


    /* =========================
    GUARDAR ALTERAÇÕES
    ======================== */

    // Salva a lista atualizada
    localStorage.setItem(
        "casaLumenPersonagens",
        JSON.stringify(
            personagensSalvos
        )
    );


    // Define qual personagem está aberto
    localStorage.setItem(
        "personagemAtual",
        dadosFicha.id
    );


    // Mostra confirmação
    document.getElementById(
        "status-salvamento"
    ).textContent =
        "Ficha salva!";
}


/* =========================
CARREGAR PERSONAGEM
========================= */

function carregarPersonagem() {

    // Descobre qual personagem deve abrir
    let idPersonagem =
        localStorage.getItem(
            "personagemAtual"
        );


    // Se for uma ficha nova,
    // não existe personagem para carregar
    if (!idPersonagem) {
        return;
    }


    // Pega os personagens salvos
    let personagens =
        localStorage.getItem(
            "casaLumenPersonagens"
        );


    // Encerra se não houver personagens
    if (!personagens) {
        return;
    }


    // Converte os dados em uma lista
    personagens =
        JSON.parse(personagens);


    // Procura o personagem selecionado
    let personagem =
        personagens.find(
            function(personagem) {

                return String(
                    personagem.id
                ) === String(
                    idPersonagem
                );
            }
        );


    // Encerra se não encontrar
    if (!personagem) {
        return;
    }


    /* =========================
    CARREGAR CAMPOS
    ========================= */

    // Percorre os dados salvos
    Object.keys(
        personagem
    ).forEach(function(campo) {

        // Procura um elemento com o mesmo ID
        let elemento =
            document.getElementById(
                campo
            );


        // Coloca o valor salvo no campo
        if (elemento) {

            elemento.value =
                personagem[campo];
        }
    });

    /* =========================
    CARREGAR INVENTÁRIO
    ========================= */

    // Limpa o inventário antes de carregar
    document.getElementById(
        "lista-itens"
    ).innerHTML = "";


    // Verifica se o personagem possui itens salvos
    if (personagem.inventario) {

        // Recria cada item salvo
        personagem.inventario.forEach(
            function(item) {

                adicionarItem(
                    item.nome,
                    item.quantidade,
                    item.descricao
                );

            }
        );
    }


    /* =========================
    CARREGAR PONTOS DE VIDA
    ========================= */

    // Calcula a vida máxima usando Corpo
    calcularVida();


    // Recupera os PV atuais salvos
    if (
        personagem.vidaAtual !==
        undefined
    ) {

        vidaAtual =
            Number(
                personagem.vidaAtual
            );


        // Impede PV acima do máximo
        if (vidaAtual > vidaMaxima) {
            vidaAtual = vidaMaxima;
        }


        // Impede PV abaixo de zero
        if (vidaAtual < 0) {
            vidaAtual = 0;
        }


        // Mostra os PV recuperados
        document.getElementById(
            "vida-atual"
        ).textContent =
            vidaAtual;
    }

/* =========================
CARREGAR PONTOS DE LÚMEN
========================= */

// Calcula o máximo com base no atributo Lúmen
calcularLumen();

// Recupera os Pontos de Lúmen que estavam salvos
if (personagem.lumenAtual !== undefined) {

    lumenAtual = Number(personagem.lumenAtual);

    // Impede Lúmen abaixo de zero
    if (lumenAtual < 0) {
        lumenAtual = 0;
    }

    // Impede Lúmen acima do máximo
    if (lumenAtual > lumenMaximo) {
        lumenAtual = lumenMaximo;
    }

    // Mostra o valor salvo
    document.getElementById(
        "lumen-atual"
    ).textContent = lumenAtual;
}


/* =========================
CARREGAR PONTOS DE TENSÃO
========================= */

// Começa em zero caso seja uma ficha antiga
tensaoAtual = 0;

// Recupera a Tensão que estava salva
if (personagem.tensaoAtual !== undefined) {

    tensaoAtual = Number(personagem.tensaoAtual);

    // Impede Tensão abaixo de zero
    if (tensaoAtual < 0) {
        tensaoAtual = 0;
    }

    // Impede Tensão acima de 10
    if (tensaoAtual > 10) {
        tensaoAtual = 10;
    }
}

// Mostra a Tensão atual
document.getElementById(
    "tensao-atual"
).textContent = tensaoAtual;

    /* =========================
    CARREGAR PODERES E MAGIAS
    ========================= */

    // Limpa a lista antes de carregar
    document.getElementById(
        "lista-poderes"
    ).innerHTML = "";


    // Verifica se o personagem possui poderes salvos
    if (personagem.poderes) {

        // Recria cada poder salvo
        personagem.poderes.forEach(
            function(poder) {

                adicionarPoder(
                    poder.nome,
                    poder.descricao
                );

            }
        );
    }
}


/* =========================
INÍCIO DA PÁGINA
========================= */

// Carrega o personagem selecionado
// quando a página da ficha é aberta
carregarPersonagem();