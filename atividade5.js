var idade
idade = parseInt(prompt("Digite a sua idade: "))
if (idade <= 10) {
    console.log("Sua categoria de competição é: Infantil.")
} else if (idade >= 11 && idade <= 13) {
    console.log("Sua categoria de competição é: Infanto-Juvenil.")
} else if (idade >= 14 && idade <= 18) {
    console.log("Sua categoria de competição é: Juvenil.")
} else if (idade > 18) {
    console.log("Sua categoria de competição é: Adulto.")
}