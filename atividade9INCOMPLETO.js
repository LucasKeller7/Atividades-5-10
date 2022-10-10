var inicio
var fim
var duracao
var tempo
inicio = parseInt(prompt("Digite a hora de início do jogo, de 00 a 23."))
fim = parseInt(prompt("Digite a hora de encerramento do jogo, de 00 a 23."))
if (inicio > fim) {
    // var vintequatroh = 24 - inicio
    tempo = (fim - inicio) + 12
    console.log(tempo)
} else if (fim > inicio) {
    tempo = inicio - fim
    console.log(tempo)
} else if (inicio == fim) {
    tempo = 24
    console.log(tempo)
}