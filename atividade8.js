var salario
var aumento
var novosalario
var porcent
salario = parseFloat(prompt("Digite seu salário: "))
if (salario >= 0 && salario <= 400) {
    aumento = salario * 0.15
    novosalario = salario + aumento
    console.log("Novo salário:", novosalario, "\nReajuste ganho:", aumento, "\nEm percentual: 15%")
} else if (salario > 400 && salario <= 800) {
    aumento = salario * 0.12
    novosalario = salario + aumento
    console.log("Novo salário:", novosalario, "\nReajuste ganho:", aumento, "\nEm percentual: 12%")
} else if (salario > 800 && salario <= 1200) {
    aumento = salario * 0.1
    novosalario = salario + aumento
    console.log("Novo salário:", novosalario, "\nReajuste ganho:", aumento, "\nEm percentual: 10%")
} else if (salario > 1200 && salario <= 2000) {
    aumento = salario * 0.07
    novosalario = salario + aumento
    console.log("Novo salário:", novosalario, "\nReajuste ganho:", aumento, "\nEm percentual: 7%")
} else if (salario > 2000) {
    aumento = salario * 0.04
    novosalario = salario + aumento
    console.log("Novo salário:", novosalario, "\nReajuste ganho:", aumento, "\nEm percentual: 4%")
} else {
    console.log("Salário inválido.")
}