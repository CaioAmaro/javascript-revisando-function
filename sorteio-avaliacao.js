/* Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. 
Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

    Sortear aleatoriamente um nome da lista de participantes.
    Exibir esse nome com um pequeno atraso (como se fosse um suspense).
    Avaliar se o participante foi premiado ou não com base na pontuação:
        Acima de 80: "Parabéns, você foi premiado!"
        Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
        Abaixo de 50: "Infelizmente, não foi dessa vez."

Sua missão é criar:

    Uma função para sortear um nome aleatoriamente.
    Uma função para exibir o nome sorteado com 2 segundos de atraso
    Uma função para avaliar a pontuação.
    Uma função final que organize o fluxo completo do sorteio.

Exemplo de entrada:

const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];
 
realizarSorteio(participantes);

Saída esperada:

Sorteando...
Participante sorteado: Pedro
Pontuação: 67
Você quase conseguiu! Fique de olho nos próximos sorteios. */

const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
]

function sortearParticipante(participantes) {
    const index = Math.floor((Math.random() * participantes.length))
    return participantes[index]
}

function exibirNome({nome}) {
    console.log('Participante sorteado: ', nome)
}

function avaliarPontuacao({pontuacao}) {

    console.log('Pontuação: ', pontuacao)

    if(pontuacao > 80){
        console.log('Parabéns, você foi premiado!')
    }else if(pontuacao >= 50){
        console.log('Você quase conseguiu! Fique de olho nos próximos sorteios.')
    }else{
        console.log('Infelizmente, não foi dessa vez.')
    }

}

function realizarSorteio(participantes){
    console.log('Sorteado...')

    const participanteSorteado = sortearParticipante(participantes)

    setTimeout(() => {
        exibirNome(participanteSorteado)
        avaliarPontuacao(participanteSorteado)
    }, 2000)
}

realizarSorteio(participantes)

