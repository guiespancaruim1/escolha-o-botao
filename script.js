const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Quero andar no estilo",
            },
            {
                texto: "Prefiro andar com qualquer coisa",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou achar lojas para seu estilo?",
            },
            {
                texto: "Naõ tentei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Algumas das lojas estão com valores absurdos?.",
            },
            {
                texto: "Não me importo com valor.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Refsourceog está com oportunidades imperdiveis",
            },
            {
                texto: "Prefiro pagar caro em algo ruim",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Produtos 100% originais e com valor menor do mercado.",
            },
            {
                texto: "Prefiro pagar caro em algo falso",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procure peças exclusivas no instagram da loja.",
            },
            {
                texto: "Não quero andar no estilo.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado, @refsourceog.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();