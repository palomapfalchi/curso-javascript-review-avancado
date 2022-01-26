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

console.log("🚀 ~ file: Objetos.js ~ line 10 ~", pessoa)
