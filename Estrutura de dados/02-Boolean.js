console.log(typeof true);
console.log(typeof false);

var maiorOuMenor = 3>4;
console.log(typeof maiorOuMenor);

console.log(maiorOuMenor);
console.log(!maiorOuMenor);

var nome = "daniel";
console.log(nome.length === 6);

var maiorOuIgual = 5 >= 5;
console.log(maiorOuIgual);
var menorOuIgual = 5 <= 10;
console.log(menorOuIgual);

var diferente = 10 != 10;
console.log(diferente);

//operadores logicos && || 

var maiorDeIdade = 18>=18; //false
var temDocumento = true; //true

console.log(maiorDeIdade && temDocumento);
console.log(maiorDeIdade || temDocumento);

console.log(!maiorDeIdade);

//operador ternario
var idade = 17;

var resposta = (idade >= 18) ? "adulto" : "menor de idade";
console.log(resposta);