const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Imagine que você tirou 30 dias de férias e pode escolher seu destino podendo levar quem quiser. Porém, está com dúvida para onde ir, nós podemos te ajudar. Qual o clima de sua preferência? ",
        alternativas: [
            {
                texto: " Lugares Quentes ",
                afirmacao: " Lembre-se de levar protetor solar. ",
            },
            {
                texto: " Lugares Frios ",
                afirmacao: " Lembre-se de levar agasalhos. ",
            }
        ]
    },
    {
        enunciado: " Ótimo! Continuando com sua preferência, o lugar que deseja ir, seria...?",
        alternativas: [
            {
                texto: " Lugares agitados e movimentados ",
                afirmacao: " Sempre fique atento, mantenha seus pertences próximos. ",
            },
            {
                texto: " Lugares calmos e aconchegantes ",
                afirmacao: " Aproveite suas férias para tirar um descanso. ",
            }
        ]
    },
    {
        enunciado: " Maravilha! Me conte... Quem vai te acompanhar? ",
        alternativas: [
            {
                texto: " Família e/ou pets ",
                afirmacao: " Hotéis ou resort's são a melhor opção para você. ",
            },
            {
                texto: " Amigos ",
                afirmacao: " AirBnb e empresas de turismo podem te auxiliar. ",
            }
        ]
    },
    {
        enunciado: " Bom! De acordo com seu financeiro, quanto pretende gastar em sua viagem? ",
        alternativas: [
            {
                texto: " Até três salários mínimos ",
                afirmacao: " Boa opção para você são viagens nacionais. ",
            },
            {
                texto: " Acima de três salários mínimos ",
                afirmacao: " Você irá adorar conhecer novos países. ",
            }
        ]
    },
    {
        enunciado: " Para Finalizar... Qual o meio de locomoção que você pretende utilizar para chegar ao seu destino? ",
        alternativas: [
            {
                texto: " Carro ou Motocicletas ",
                afirmacao: " Seu destino pode ser próximo a você. ",
            },
            {
                texto: " Avião ou Ônibus ",
                afirmacao: " Sair da sua zona de conforto e conhecer novos horizontes. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta () {
    if (atual>= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement ("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild (botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seguindo a suas respostas em nossa pesquisa, a viagem ideal para você seria referente à essas sugestões:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();