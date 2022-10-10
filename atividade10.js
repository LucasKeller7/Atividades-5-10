var vert
var classe
var alim
vert = prompt("Digite 'vertebrado' ou 'invertebrado':")
classe = prompt("Digite a classe do seu animal: ")
alim = prompt("Digite a dieta do seu animal: ")
if (vert == "vertebrado" && classe == "ave" && alim == "carnívoro") {
    console.log("Seu animal é a águia.")
} else if (vert == "vertebrado" && classe == "ave" && alim == "onívoro") {
    console.log("Seu animal é o pombo.")
} else if (vert == "vertebrado" && classe == "mamífero" && alim == "onívoro") {
    console.log("Seu animal é o ser humano.")
} else if (vert == "vertebrado" && classe == "mamífero" && alim == "herbívoro") {
    console.log("Seu animal é a vaca.")
} else if (vert == "invertebrado" && classe == "inseto" && alim == "hematófago") {
    console.log("Seu animal é a pulga.")
} else if (vert == "invertebrado" && classe == "inseto" && alim == "herbívoro") {
    console.log("Seu animal é a lagarta.")
} else if (vert == "invertebrado" && classe == "anelídeo" && alim == "hematófago") {
    console.log("Seu animal é a sanguessuga.")
} else if (vert == "invertebrado" && classe == "anelídeo" && alim == "onívoro") {
    console.log("Seu animal é a minhoca.")
} else {
    console.log("Animal inválido. Verifique se você respondeu corretamente, e responda apenas com letras minúsculas.")
}