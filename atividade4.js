var sexo
sexo = prompt("Digite 'M' se seu sexo for masculino, e 'F' se seu sexo for feminino: ")
if (sexo == 'M' || sexo == 'm') {
    console.log("Você é um homem!")
} else if (sexo == 'F' || sexo == 'f') {
    console.log("Você é uma mulher!")
} else {
    console.log("Sexo inválido.")
}