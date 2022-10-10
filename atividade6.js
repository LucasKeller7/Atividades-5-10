var num
num = parseFloat(prompt("Digite um número: "))
if (num >= 0 && num <= 25) {
    console.log("O número se encontra no intervalo de 0 - 25.")
} else if (num > 25 && num <= 50) {
    console.log("O número se encontra no intervalo de 26 - 50.")
} else if (num > 50 && num <= 75) {
    console.log("O número se encontra no intervalo de 51 - 75.")
} else if (num > 75 && num <= 100) {
    console.log("O número se encontra no intervalo de 76 - 100.")
} else {
    console.log("Fora de intervalo.")
}