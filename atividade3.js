var n1, n2
n1 = parseFloat(prompt("Digite um número: "))
n2 = parseFloat(prompt("Digite outro número: "))
if (n1 > n2) {
    console.log("O maior número é: ", n1)
} else if (n2 > n1) {
    console.log("O maior número é: ", n2)
} else {
    console.log("Os dois números são iguais.")
}