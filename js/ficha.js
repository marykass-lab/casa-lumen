/* =========================
   ROLAGEM DE DADOS
========================= */

function rolarDado(idAtributo) {

    // Pega o valor do atributo
    const atributo = Number(
        document.getElementById(idAtributo).value
    ) || 0;

    // Rola 2 dados de 6 lados
    const dado1 =
        Math.floor(Math.random() * 6) + 1;

    const dado2 =
        Math.floor(Math.random() * 6) + 1;

    // Soma 2d6 + atributo
    const total =
        dado1 +
        dado2 +
        atributo;

    // Mostra o resultado
    document.getElementById(
        "resultado"
    ).textContent =
        total;

    // Mostra os detalhes da rolagem
    document.getElementById(
        "detalhes-rolagem"
    ).textContent =
        dado1 +
        " + " +
        dado2 +
        " + " +
        atributo;
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
    const atributo1 =
        Number(
            document.getElementById(
                "atributo1"
            ).value
        ) || 0;

    // Guarda o valor máximo anterior
    const vidaMaximaAnterior =
        vidaMaxima;

    // Calcula Corpo × 10
    vidaMaxima =
        atributo1 * 10;

    // Em uma ficha nova,
    // começa com a vida cheia
    if (
        vidaMaximaAnterior === 0 &&
        vidaAtual === 0
    ) {

        vidaAtual =
            vidaMaxima;
    }

    // Impede PV acima do máximo
    if (
        vidaAtual >
        vidaMaxima
    ) {

        vidaAtual =
            vidaMaxima;
    }

    // Impede PV abaixo de zero
    if (
        vidaAtual < 0
    ) {

        vidaAtual = 0;
    }

    // Mostra os PV atuais
    document.getElementById(
        "vida-atual"
    ).textContent =
        vidaAtual;

    // Mostra os PV máximos
    document.getElementById(
        "vida-maxima"
    ).textContent =
        vidaMaxima;
}


/* =========================
   ALTERAR VIDA
========================= */

function alterarVida(valor) {

    // Soma ou diminui os PV
    vidaAtual =
        vidaAtual + valor;

    // Impede PV abaixo de zero
    if (
        vidaAtual < 0
    ) {

        vidaAtual = 0;
    }

    // Impede PV acima do máximo
    if (
        vidaAtual >
        vidaMaxima
    ) {

        vidaAtual =
            vidaMaxima;
    }

    // Atualiza os PV mostrados
    document.getElementById(
        "vida-atual"
    ).textContent =
        vidaAtual;
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
    const atributo4 =
        Number(
            document.getElementById(
                "atributo4"
            ).value
        ) || 0;

    // Guarda o máximo anterior
    const lumenMaximoAnterior =
        lumenMaximo;

    // Calcula Lúmen × 10
    lumenMaximo =
        atributo4 * 10;

    // Em uma ficha nova,
    // começa com o Lúmen cheio
    if (
        lumenMaximoAnterior === 0 &&
        lumenAtual === 0
    ) {

        lumenAtual =
            lumenMaximo;
    }

    // Impede Lúmen acima do máximo
    if (
        lumenAtual >
        lumenMaximo
    ) {

        lumenAtual =
            lumenMaximo;
    }

    // Impede Lúmen abaixo de zero
    if (
        lumenAtual < 0
    ) {

        lumenAtual = 0;
    }

    // Mostra o Lúmen atual
    document.getElementById(
        "lumen-atual"
    ).textContent =
        lumenAtual;

    // Mostra o Lúmen máximo
    document.getElementById(
        "lumen-maximo"
    ).textContent =
        lumenMaximo;
}


/* =========================
   ALTERAR LÚMEN
========================= */

function alterarLumen(valor) {

    // Soma ou diminui os Pontos de Lúmen
    lumenAtual =
        lumenAtual + valor;

    // Impede Lúmen abaixo de zero
    if (
        lumenAtual < 0
    ) {

        lumenAtual = 0;
    }

    // Impede Lúmen acima do máximo
    if (
        lumenAtual >
        lumenMaximo
    ) {

        lumenAtual =
            lumenMaximo;
    }

    // Atualiza o Lúmen mostrado
    document.getElementById(
        "lumen-atual"
    ).textContent =
        lumenAtual;
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
    tensaoAtual =
        tensaoAtual + valor;

    // Impede a Tensão abaixo de zero
    if (
        tensaoAtual < 0
    ) {

        tensaoAtual = 0;
    }

    // Impede a Tensão acima de 10
    if (
        tensaoAtual > 10
    ) {

        tensaoAtual = 10;
    }

    // Atualiza a Tensão mostrada
    document.getElementById(
        "tensao-atual"
    ).textContent =
        tensaoAtual;
}


/* =========================
   PERÍCIAS
========================= */

function rolarPericia(idPericia) {

    // Pega os pontos da perícia
    const bonusPericia =
        Number(
            document.getElementById(
                idPericia
            ).value
        ) || 0;

    // Rola 2 dados de 6 lados
    const dado1 =
        Math.floor(
            Math.random() * 6
        ) + 1;

    const dado2 =
        Math.floor(
            Math.random() * 6
        ) + 1;

    // Calcula 2d6 + perícia
    const total =
        dado1 +
        dado2 +
        bonusPericia;

    // Mostra o resultado
    document.getElementById(
        "resultado"
    ).textContent =
        total;

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
    const idPericia =
        document.getElementById(
            "pericia-selecionada"
        ).value;

    // Descobre qual atributo foi escolhido
    const idAtributo =
        document.getElementById(
            "atributo-selecionado"
        ).value;

    // Valores iniciais
    let bonusPericia = 0;

    let bonusAtributo = 0;

    // Pega o bônus da perícia
    if (
        idPericia !== ""
    ) {

        bonusPericia =
            Number(
                document.getElementById(
                    idPericia
                ).value
            ) || 0;
    }

    // Pega o bônus do atributo
    if (
        idAtributo !== ""
    ) {

        bonusAtributo =
            Number(
                document.getElementById(
                    idAtributo
                ).value
            ) || 0;
    }

    // Rola 2d6
    const dado1 =
        Math.floor(
            Math.random() * 6
        ) + 1;

    const dado2 =
        Math.floor(
            Math.random() * 6
        ) + 1;

    // Calcula o resultado
    const total =
        dado1 +
        dado2 +
        bonusPericia +
        bonusAtributo;

    // Mostra o resultado
    document.getElementById(
        "resultado"
    ).textContent =
        total;

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

function adicionarPoder(
    nome = "",
    descricao = "",
    custoLumen = 0,
    quantidadeDano = 1,
    dadoDano = 6
) {

    // Pega a lista de poderes
    const listaPoderes =
        document.getElementById(
            "lista-poderes"
        );

    // Cria um novo poder
    const novoPoder =
        document.createElement(
            "div"
        );

    // Adiciona a classe do CSS
    novoPoder.classList.add(
        "poder"
    );

    // Cria todos os campos
    // daquele poder ou magia

    novoPoder.innerHTML = `

    <!-- Nome -->
    <input
        type="text"
        class="nome-poder"
        placeholder="Nome do poder ou magia"
    >

    <!-- Descrição -->
    <textarea
        class="descricao-poder"
        placeholder="Descrição ou efeito"
    ></textarea>


    <!-- Custo de Lúmen -->
    <div class="campo-mecanica-poder">

        <label>
            Custo de Lúmen
        </label>

        <input
            type="number"
            class="custo-lumen-poder"
            value="0"
            min="0"
        >

    </div>


    <!-- Quantidade de dados -->
    <div class="campo-mecanica-poder">

        <label>
            Qtd. de Dados
        </label>

        <input
            type="number"
            class="quantidade-dano-poder"
            value="1"
            min="1"
        >

    </div>


    <!-- Tipo de dado -->
    <div class="campo-mecanica-poder">

        <label>
            Dado de Dano
        </label>

        <select
            class="dado-dano-poder"
        >

            <option value="4">
                d4
            </option>

            <option value="6">
                d6
            </option>

            <option value="8">
                d8
            </option>

            <option value="10">
                d10
            </option>

            <option value="12">
                d12
            </option>

            <option value="20">
                d20
            </option>

        </select>

    </div>


    <!-- Usar poder -->
    <button
        type="button"
        class="botao-usar-poder"
        onclick="usarPoder(this)"
    >
        Usar
    </button>


    <!-- Rolar dano -->
    <button
        type="button"
        class="botao-dano-poder"
        onclick="rolarDanoPoder(this)"
    >
        Rolar Dano
    </button>


    <!-- Remover -->
    <button
        type="button"
        class="botao-remover-poder"
        onclick="removerPoder(this)"
    >
        Remover
    </button>

`;

    // Coloca o poder na ficha
    listaPoderes.appendChild(
        novoPoder
    );

    // Recupera o nome salvo
    novoPoder.querySelector(
        ".nome-poder"
    ).value =
        nome;

    // Recupera a descrição salva
    novoPoder.querySelector(
        ".descricao-poder"
    ).value =
        descricao;

    // Recupera o custo salvo
    novoPoder.querySelector(
        ".custo-lumen-poder"
    ).value =
        custoLumen;

    // Recupera a quantidade salva
    novoPoder.querySelector(
        ".quantidade-dano-poder"
    ).value =
        quantidadeDano;

    // Recupera o dado salvo
    novoPoder.querySelector(
        ".dado-dano-poder"
    ).value =
        String(dadoDano);
}


/* =========================
   USAR PODER OU MAGIA
========================= */

function usarPoder(botao) {

    // Encontra o poder
    const poder =
        botao.closest(
            ".poder"
        );

    // Pega o custo de Lúmen
    const custo =
        Number(
            poder.querySelector(
                ".custo-lumen-poder"
            ).value
        ) || 0;

    // Impede custo negativo
    if (
        custo < 0
    ) {

        return;
    }

    // Verifica se existe
    // Lúmen suficiente
    if (
        lumenAtual < custo
    ) {

        document.getElementById(
            "resultado"
        ).textContent =
            "Lúmen insuficiente";

        document.getElementById(
            "detalhes-rolagem"
        ).textContent =
            "Você precisa de " +
            custo +
            " Pontos de Lúmen.";

        return;
    }

    // Desconta o custo
    lumenAtual -= custo;

    // Atualiza o Lúmen na ficha
    document.getElementById(
        "lumen-atual"
    ).textContent =
        lumenAtual;

    // Descobre o nome
    const nome =
        poder.querySelector(
            ".nome-poder"
        ).value ||
        "Poder";

    // Mostra qual poder foi usado
    document.getElementById(
        "resultado"
    ).textContent =
        nome;

    // Mostra o custo
    document.getElementById(
        "detalhes-rolagem"
    ).textContent =
        "Usado com sucesso. -" +
        custo +
        " Lúmen.";
}


/* =========================
   ROLAR DANO DO PODER
========================= */

function rolarDanoPoder(botao) {

    // Encontra o poder
    const poder =
        botao.closest(
            ".poder"
        );

    // Pega a quantidade de dados
    let quantidade =
        Number(
            poder.querySelector(
                ".quantidade-dano-poder"
            ).value
        ) || 1;

    // Impede quantidade menor que 1
    if (
        quantidade < 1
    ) {

        quantidade = 1;
    }

    // Pega o tipo do dado
    const dado =
        Number(
            poder.querySelector(
                ".dado-dano-poder"
            ).value
        ) || 6;

    // Guarda cada resultado
    const resultados = [];

    // Guarda o dano total
    let total = 0;

    // Rola todos os dados
    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        const resultado =
            Math.floor(
                Math.random() * dado
            ) + 1;

        resultados.push(
            resultado
        );

        total +=
            resultado;
    }

    // Descobre o nome do poder
    const nome =
        poder.querySelector(
            ".nome-poder"
        ).value ||
        "Poder";

    // Mostra o dano total
    document.getElementById(
        "resultado"
    ).textContent =
        total;

    // Mostra os dados individualmente
    document.getElementById(
        "detalhes-rolagem"
    ).textContent =
        nome +
        ": " +
        quantidade +
        "d" +
        dado +
        " → " +
        resultados.join(
            " + "
        );
}


/* =========================
   REMOVER PODER
========================= */

function removerPoder(botao) {

    // Encontra o poder
    const poder =
        botao.closest(
            ".poder"
        );

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
    const listaItens =
        document.getElementById(
            "lista-itens"
        );

    // Cria um novo item
    const novoItem =
        document.createElement(
            "div"
        );

    // Adiciona a classe do CSS
    novoItem.classList.add(
        "item"
    );

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

        <!-- Descrição -->
        <textarea
            class="descricao-item"
            placeholder="Descrição"
        ></textarea>

        <!-- Remover -->
        <button
            type="button"
            class="botao-remover-item"
            onclick="removerItem(this)"
        >
            Remover
        </button>

    `;

    // Coloca o item no inventário
    listaItens.appendChild(
        novoItem
    );

    // Recupera o nome salvo
    novoItem.querySelector(
        ".nome-item"
    ).value =
        nome;

    // Recupera a quantidade salva
    novoItem.querySelector(
        ".quantidade-item"
    ).value =
        quantidade;

    // Recupera a descrição salva
    novoItem.querySelector(
        ".descricao-item"
    ).value =
        descricao;
}


/* =========================
   REMOVER ITEM
========================= */

function removerItem(botao) {

    // Encontra o item
    const item =
        botao.closest(
            ".item"
        );

    // Remove o item
    item.remove();
}

/* =========================
   IMAGENS DA FICHA
========================= */

// Campo para selecionar
// a foto do personagem
const inputFotoPersonagem =
    document.getElementById(
        "input-foto-personagem"
    );

// Imagem do personagem
const fotoPersonagem =
    document.getElementById(
        "foto-personagem"
    );

// Texto "+ Adicionar imagem"
const textoFotoPersonagem =
    document.getElementById(
        "texto-foto-personagem"
    );

// Botão para remover
// a foto do personagem
const removerFotoPersonagem =
    document.getElementById(
        "remover-foto-personagem"
    );


// Campo para selecionar
// a foto do legado
const inputFotoLegado =
    document.getElementById(
        "input-foto-legado"
    );

// Imagem do legado
const fotoLegado =
    document.getElementById(
        "foto-legado"
    );

// Texto "+ Adicionar imagem"
const textoFotoLegado =
    document.getElementById(
        "texto-foto-legado"
    );

// Botão para remover
// a foto do legado
const removerFotoLegado =
    document.getElementById(
        "remover-foto-legado"
    );


/* =========================
   IMAGENS ATUAIS
========================= */

// Guarda a foto do personagem
// em formato Base64
let fotoPersonagemBase64 = "";

// Guarda a foto do legado
// em formato Base64
let fotoLegadoBase64 = "";


/* =========================
   MOSTRAR IMAGEM
========================= */

function mostrarImagem(
    imagem,
    texto,
    botao,
    arquivo
) {

    // Se existe uma imagem
    if (arquivo) {

        // Coloca a imagem
        imagem.src =
            arquivo;

        // Mostra a imagem
        imagem.style.display =
            "block";

        // Esconde o texto
        texto.style.display =
            "none";

        // Mostra o botão Remover
        botao.style.display =
            "block";

    } else {

        // Remove a imagem
        imagem.removeAttribute(
            "src"
        );

        // Esconde a imagem
        imagem.style.display =
            "none";

        // Mostra o texto
        texto.style.display =
            "block";

        // Esconde o botão Remover
        botao.style.display =
            "none";
    }
}


/* =========================
   FOTO DO PERSONAGEM
========================= */

inputFotoPersonagem.addEventListener(
    "change",
    function () {

        // Pega o arquivo escolhido
        const arquivo =
            this.files[0];

        // Se nenhum arquivo
        // foi escolhido, para
        if (!arquivo) {
            return;
        }

        // Verifica se é imagem
        if (
            !arquivo.type.startsWith(
                "image/"
            )
        ) {

            alert(
                "Selecione um arquivo de imagem."
            );

            return;
        }

        // Cria um leitor
        // para transformar a imagem
        // em Base64
        const leitor =
            new FileReader();

        // Quando terminar de ler
        leitor.onload =
            function (evento) {

                // Guarda a imagem
                fotoPersonagemBase64 =
                    evento.target.result;

                // Mostra a imagem
                mostrarImagem(
                    fotoPersonagem,
                    textoFotoPersonagem,
                    removerFotoPersonagem,
                    fotoPersonagemBase64
                );
            };

        // Lê a imagem
        leitor.readAsDataURL(
            arquivo
        );
    }
);


/* =========================
   FOTO DO LEGADO
========================= */

inputFotoLegado.addEventListener(
    "change",
    function () {

        // Pega o arquivo escolhido
        const arquivo =
            this.files[0];

        // Se nenhum arquivo
        // foi escolhido, para
        if (!arquivo) {
            return;
        }

        // Verifica se é imagem
        if (
            !arquivo.type.startsWith(
                "image/"
            )
        ) {

            alert(
                "Selecione um arquivo de imagem."
            );

            return;
        }

        // Cria um leitor
        // para transformar a imagem
        // em Base64
        const leitor =
            new FileReader();

        // Quando terminar de ler
        leitor.onload =
            function (evento) {

                // Guarda a imagem
                fotoLegadoBase64 =
                    evento.target.result;

                // Mostra a imagem
                mostrarImagem(
                    fotoLegado,
                    textoFotoLegado,
                    removerFotoLegado,
                    fotoLegadoBase64
                );
            };

        // Lê a imagem
        leitor.readAsDataURL(
            arquivo
        );
    }
);


/* =========================
   REMOVER FOTO DO PERSONAGEM
========================= */

removerFotoPersonagem.addEventListener(
    "click",
    function () {

        // Apaga a imagem salva
        fotoPersonagemBase64 = "";

        // Limpa o input
        inputFotoPersonagem.value = "";

        // Volta para o estado
        // sem imagem
        mostrarImagem(
            fotoPersonagem,
            textoFotoPersonagem,
            removerFotoPersonagem,
            ""
        );
    }
);


/* =========================
   REMOVER FOTO DO LEGADO
========================= */

removerFotoLegado.addEventListener(
    "click",
    function () {

        // Apaga a imagem salva
        fotoLegadoBase64 = "";

        // Limpa o input
        inputFotoLegado.value = "";

        // Volta para o estado
        // sem imagem
        mostrarImagem(
            fotoLegado,
            textoFotoLegado,
            removerFotoLegado,
            ""
        );
    }
);


/* =========================
   SALVAR PERSONAGEM
========================= */

function salvarFicha() {

    // Seleciona todos os campos
    // fixos da ficha que possuem ID.
    //
    // Os inputs de arquivo
    // não entram aqui porque
    // as imagens são salvas
    // separadamente em Base64.
    const campos =
        document.querySelectorAll(
            'input[id]:not([type="file"]), select[id], textarea[id]'
        );

    // Cria o objeto que guardará
    // todos os dados da ficha
    const dadosFicha = {};


    /* =========================
       SALVAR CAMPOS FIXOS
    ========================= */

    campos.forEach(
        function (campo) {

            // Usa o ID do campo
            // como nome da propriedade
            dadosFicha[campo.id] =
                campo.value;
        }
    );


    /* =========================
       SALVAR PONTOS DE VIDA
    ========================= */

    // Guarda os PV atuais
    dadosFicha.vidaAtual =
        vidaAtual;


    /* =========================
       SALVAR PONTOS DE LÚMEN
    ========================= */

    // Guarda os Pontos
    // de Lúmen atuais
    dadosFicha.lumenAtual =
        lumenAtual;


    /* =========================
       SALVAR PONTOS DE TENSÃO
    ========================= */

    // Guarda a Tensão atual
    dadosFicha.tensaoAtual =
        tensaoAtual;


    /* =========================
       SALVAR IMAGENS
    ========================= */

    // Guarda a foto
    // do personagem
    dadosFicha.fotoPersonagem =
        fotoPersonagemBase64;

    // Guarda a foto
    // do legado
    dadosFicha.fotoLegado =
        fotoLegadoBase64;


    /* =========================
       SALVAR PODERES E MAGIAS
    ========================= */

    // Lista que receberá
    // todos os poderes
    const poderes = [];

    // Procura todos os poderes
    // existentes na ficha
    document.querySelectorAll(
        ".poder"
    ).forEach(
        function (poder) {

            // Pega o nome
            const nomePoder =
                poder.querySelector(
                    ".nome-poder"
                ).value;

            // Pega a descrição
            const descricaoPoder =
                poder.querySelector(
                    ".descricao-poder"
                ).value;

            // Pega o custo de Lúmen
            const custoLumen =
                Number(
                    poder.querySelector(
                        ".custo-lumen-poder"
                    ).value
                ) || 0;

            // Pega a quantidade
            // de dados de dano
            const quantidadeDano =
                Number(
                    poder.querySelector(
                        ".quantidade-dano-poder"
                    ).value
                ) || 1;

            // Pega o tipo de dado
            const dadoDano =
                Number(
                    poder.querySelector(
                        ".dado-dano-poder"
                    ).value
                ) || 6;

            // Guarda esse poder
            // dentro da lista
            poderes.push({

                nome:
                    nomePoder,

                descricao:
                    descricaoPoder,

                custoLumen:
                    custoLumen,

                quantidadeDano:
                    quantidadeDano,

                dadoDano:
                    dadoDano
            });
        }
    );

    // Guarda a lista de poderes
    // dentro da ficha
    dadosFicha.poderes =
        poderes;


    /* =========================
       SALVAR INVENTÁRIO
    ========================= */

    // Lista que receberá
    // todos os itens
    const inventario = [];

    // Procura todos os itens
    document.querySelectorAll(
        ".item"
    ).forEach(
        function (item) {

            // Pega o nome do item
            const nomeItem =
                item.querySelector(
                    ".nome-item"
                ).value;

            // Pega a quantidade
            const quantidadeItem =
                item.querySelector(
                    ".quantidade-item"
                ).value;

            // Pega a descrição
            const descricaoItem =
                item.querySelector(
                    ".descricao-item"
                ).value;

            // Guarda o item
            // dentro da lista
            inventario.push({

                nome:
                    nomeItem,

                quantidade:
                    quantidadeItem,

                descricao:
                    descricaoItem
            });
        }
    );

    // Guarda o inventário
    // dentro da ficha
    dadosFicha.inventario =
        inventario;


    /* =========================
       VERIFICAR NOME
    ========================= */

    // Pega o nome
    // do personagem
    const nomePersonagem =
        document.getElementById(
            "nome"
        ).value;

    // Não permite salvar
    // uma ficha sem nome
    if (
        nomePersonagem.trim() === ""
    ) {

        document.getElementById(
            "status-salvamento"
        ).textContent =
            "Digite o nome do personagem.";

        return;
    }


    /* =========================
       PEGAR PERSONAGENS SALVOS
    ========================= */

    // Busca a lista
    // no localStorage
    let personagensSalvos =
        localStorage.getItem(
            "casaLumenPersonagens"
        );

    // Se existe uma lista salva
    if (personagensSalvos) {

        // Transforma o texto
        // novamente em array
        personagensSalvos =
            JSON.parse(
                personagensSalvos
            );

    } else {

        // Se ainda não existe,
        // cria uma lista vazia
        personagensSalvos = [];
    }


    /* =========================
       PERSONAGEM ATUAL
    ========================= */

    // Descobre se estamos
    // editando um personagem
    // que já existe
    let idPersonagem =
        localStorage.getItem(
            "personagemAtual"
        );


    /* =========================
       ATUALIZAR PERSONAGEM
    ========================= */

    if (idPersonagem) {

        // Procura o personagem
        // dentro da lista
        const indicePersonagem =
            personagensSalvos.findIndex(
                function (personagem) {

                    return String(
                        personagem.id
                    ) === String(
                        idPersonagem
                    );
                }
            );

        // Se encontrou
        if (
            indicePersonagem !== -1
        ) {

            // Mantém o mesmo ID
            dadosFicha.id =
                personagensSalvos[
                    indicePersonagem
                ].id;

            // Substitui os dados
            // antigos pelos novos
            personagensSalvos[
                indicePersonagem
            ] =
                dadosFicha;

        } else {

            // Se por algum motivo
            // o ID não existir mais,
            // cria um novo
            idPersonagem =
                Date.now();

            // Guarda o novo ID
            dadosFicha.id =
                idPersonagem;

            // Adiciona a ficha
            personagensSalvos.push(
                dadosFicha
            );
        }

    } else {

        /* =========================
           CRIAR NOVO PERSONAGEM
        ========================= */

        // Cria um ID único
        idPersonagem =
            Date.now();

        // Guarda o ID
        // dentro da ficha
        dadosFicha.id =
            idPersonagem;

        // Adiciona a nova ficha
        // na lista
        personagensSalvos.push(
            dadosFicha
        );
    }


    /* =========================
       GUARDAR ALTERAÇÕES
    ========================= */

    try {

        // Salva toda a lista
        // novamente no navegador
        localStorage.setItem(
            "casaLumenPersonagens",
            JSON.stringify(
                personagensSalvos
            )
        );

    } catch (erro) {

        // Se o localStorage
        // ficar cheio,
        // mostra uma mensagem
        document.getElementById(
            "status-salvamento"
        ).textContent =
            "Não foi possível salvar. As imagens podem estar muito grandes.";

        return;
    }

    // Define esse personagem
    // como o personagem atual
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

    // Descobre qual personagem
    // deve ser aberto
    const idPersonagem =
        localStorage.getItem(
            "personagemAtual"
        );


    // Se não existe personagem atual,
    // significa que é uma ficha nova
    if (!idPersonagem) {

        return;
    }


    /* =========================
       PEGAR PERSONAGENS SALVOS
    ========================= */

    // Busca os personagens
    // salvos no navegador
    let personagens =
        localStorage.getItem(
            "casaLumenPersonagens"
        );


    // Se não existe nenhum
    // personagem salvo, encerra
    if (!personagens) {

        return;
    }


    // Transforma o texto salvo
    // novamente em uma lista
    personagens =
        JSON.parse(
            personagens
        );


    /* =========================
       ENCONTRAR PERSONAGEM
    ========================= */

    // Procura o personagem
    // que está sendo aberto
    const personagem =
        personagens.find(
            function (personagem) {

                return String(
                    personagem.id
                ) === String(
                    idPersonagem
                );
            }
        );


    // Se não encontrar,
    // encerra o carregamento
    if (!personagem) {

        return;
    }


    /* =========================
       CARREGAR CAMPOS FIXOS
    ========================= */

    // Percorre todas as propriedades
    // salvas no personagem
    Object.keys(
        personagem
    ).forEach(
        function (campo) {

            // Procura um elemento
            // com aquele mesmo ID
            const elemento =
                document.getElementById(
                    campo
                );


            // Só coloca o valor
            // se o elemento existir
            //
            // Arrays e objetos
            // são carregados
            // separadamente
            if (
                elemento &&
                typeof personagem[campo] !==
                    "object"
            ) {

                elemento.value =
                    personagem[campo];
            }
        }
    );


    /* =========================
       CARREGAR IMAGENS
    ========================= */

    // Recupera a foto
    // do personagem
    fotoPersonagemBase64 =
        personagem.fotoPersonagem ||
        "";


    // Recupera a foto
    // do legado
    fotoLegadoBase64 =
        personagem.fotoLegado ||
        "";


    // Mostra a foto
    // do personagem
    mostrarImagem(
        fotoPersonagem,
        textoFotoPersonagem,
        removerFotoPersonagem,
        fotoPersonagemBase64
    );


    // Mostra a foto
    // do legado
    mostrarImagem(
        fotoLegado,
        textoFotoLegado,
        removerFotoLegado,
        fotoLegadoBase64
    );


    /* =========================
       CARREGAR INVENTÁRIO
    ========================= */

    // Limpa a lista antes
    // de recriar os itens
    document.getElementById(
        "lista-itens"
    ).innerHTML =
        "";


    // Verifica se existe
    // inventário salvo
    if (
        Array.isArray(
            personagem.inventario
        )
    ) {

        // Recria cada item
        personagem.inventario.forEach(
            function (item) {

                adicionarItem(

                    item.nome ||
                    "",

                    item.quantidade ||
                    1,

                    item.descricao ||
                    ""
                );
            }
        );
    }


    /* =========================
       CARREGAR PONTOS DE VIDA
    ========================= */

    // Pega o atributo Corpo
    const atributoCorpo =
        Number(
            document.getElementById(
                "atributo1"
            ).value
        ) || 0;


    // Calcula os PV máximos
    vidaMaxima =
        atributoCorpo * 10;


    // Verifica se existem
    // PV atuais salvos
    if (
        personagem.vidaAtual !==
        undefined
    ) {

        // Recupera os PV atuais
        vidaAtual =
            Number(
                personagem.vidaAtual
            );

    } else {

        // Fichas antigas que não
        // possuem vidaAtual
        // começam com vida cheia
        vidaAtual =
            vidaMaxima;
    }


    // Impede PV acima do máximo
    if (
        vidaAtual >
        vidaMaxima
    ) {

        vidaAtual =
            vidaMaxima;
    }


    // Impede PV abaixo de zero
    if (
        vidaAtual < 0
    ) {

        vidaAtual = 0;
    }


    // Mostra os PV atuais
    document.getElementById(
        "vida-atual"
    ).textContent =
        vidaAtual;


    // Mostra os PV máximos
    document.getElementById(
        "vida-maxima"
    ).textContent =
        vidaMaxima;


    /* =========================
       CARREGAR PONTOS DE LÚMEN
    ========================= */

    // Pega o atributo Lúmen
    const atributoLumen =
        Number(
            document.getElementById(
                "atributo4"
            ).value
        ) || 0;


    // Calcula o máximo
    lumenMaximo =
        atributoLumen * 10;


    // Verifica se existe
    // Lúmen atual salvo
    if (
        personagem.lumenAtual !==
        undefined
    ) {

        // Recupera o valor salvo
        lumenAtual =
            Number(
                personagem.lumenAtual
            );

    } else {

        // Fichas antigas começam
        // com o Lúmen cheio
        lumenAtual =
            lumenMaximo;
    }


    // Impede Lúmen abaixo de zero
    if (
        lumenAtual < 0
    ) {

        lumenAtual = 0;
    }


    // Impede Lúmen acima do máximo
    if (
        lumenAtual >
        lumenMaximo
    ) {

        lumenAtual =
            lumenMaximo;
    }


    // Mostra o Lúmen atual
    document.getElementById(
        "lumen-atual"
    ).textContent =
        lumenAtual;


    // Mostra o Lúmen máximo
    document.getElementById(
        "lumen-maximo"
    ).textContent =
        lumenMaximo;


    /* =========================
       CARREGAR PONTOS DE TENSÃO
    ========================= */

    // Por padrão,
    // começa em zero
    tensaoAtual = 0;


    // Verifica se existe
    // Tensão salva
    if (
        personagem.tensaoAtual !==
        undefined
    ) {

        // Recupera o valor salvo
        tensaoAtual =
            Number(
                personagem.tensaoAtual
            );
    }


    // Impede Tensão abaixo de zero
    if (
        tensaoAtual < 0
    ) {

        tensaoAtual = 0;
    }


    // Impede Tensão acima de 10
    if (
        tensaoAtual > 10
    ) {

        tensaoAtual = 10;
    }


    // Mostra a Tensão atual
    document.getElementById(
        "tensao-atual"
    ).textContent =
        tensaoAtual;


    /* =========================
       CARREGAR PODERES E MAGIAS
    ========================= */

    // Limpa a lista de poderes
    // antes de recriar
    document.getElementById(
        "lista-poderes"
    ).innerHTML =
        "";


    // Verifica se existem
    // poderes salvos
    if (
        Array.isArray(
            personagem.poderes
        )
    ) {

        // Recria cada poder
        personagem.poderes.forEach(
            function (poder) {

                adicionarPoder(

                    // Nome
                    poder.nome ||
                    "",

                    // Descrição
                    poder.descricao ||
                    "",

                    // Custo de Lúmen
                    //
                    // Se for uma ficha
                    // antiga, começa em 0
                    poder.custoLumen ??
                    0,

                    // Quantidade de dados
                    //
                    // Se for uma ficha
                    // antiga, começa em 1
                    poder.quantidadeDano ??
                    1,

                    // Tipo de dado
                    //
                    // Se for uma ficha
                    // antiga, começa em d6
                    poder.dadoDano ??
                    6
                );
            }
        );
    }
}


/* =========================
   INÍCIO DA PÁGINA
========================= */

// Quando o ficha.js termina
// de carregar, procura o
// personagem selecionado
// e coloca seus dados na ficha
carregarPersonagem();