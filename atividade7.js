var num
var num1
num = parseInt(prompt("Digite um número: "))
num1 = parseInt(prompt("Digite outro número: "))
if (num % num1 == 0) {
    console.log("São múltiplos.")
} else if (num1 % num == 0) {
    console.log("São múltiplos.")   
} else {
    console.log("Não são múltiplos.")
}