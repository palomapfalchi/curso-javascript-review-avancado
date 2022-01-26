const pessoa = {
    nome: "Daniel",
    jogos: ["Dota", "LOL", "CS", "Chess"],
    peso: "100kg",
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

//console.log("🚀 ~ file: Objetos.js ~ line 2 ~ pessoa", pessoa.jogos[2])

pessoa.nome = "Kimera"
pessoa.jogos = [...pessoa.jogos, "Cryptocars"];
pessoa.idade = 20
delete pessoa.peso 
pessoa.falar = function(texto){
    pessoa.nome = "Alexa";
    console.log(`${pessoa.nome} disse: ${texto}`);
}

console.log("🚀 ~ file: Objetos.js ~ line 10 ~", pessoa)
pessoa.falar("Olá, tudo bem?"); 

//DESESTRUTURAÇÃO

const carro = {
    marca: "Hyundai",
    modelo: "Elantra",
    placa: "ADS-9999"
}

let {marca, modelo} = carro
console.log("🚀 ~ file: Objetos.js ~ line 35 ~ marca, modelo", marca, modelo)

let objA = {
    nome: "Daniel"
}

objB = objA;

let objC = {
    nome: "daniel"
}

console.log("🚀 ~ file: Objetos.js ~ line 42 ~ objB = objA", objA == objB)
console.log("🚀 ~ file: Objetos.js ~ line 42 ~ objB = objA", objA == objC)
