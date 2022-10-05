var nota1, nota2, notaRec, media
nota1 = parseFloat(prompt('Digite a nota da Primeira Avaliação: '))
nota2 = parseFloat(prompt('Digite a nota da Segunda Avaliação: '))
media = (nota1+nota2)/2
console.log(media)
if (media >= 6){
    console.log("Parabéns, você foi aprovado!")
} else {
    console.log("Sua nota está abaixo da média, você terá que fazer a Avaliação de Recuperação.")
    notaRec = parseFloat(prompt('Digite a nota da Avaliação de Recuperação: '))
    novaMedia = (media + notaRec) / 2
    if (notaRec >=6){
        console.log("Parabéns, você foi aprovado!")
    } else {
        console.log("Sinto muito, mas você foi reprovado.")
    }
}