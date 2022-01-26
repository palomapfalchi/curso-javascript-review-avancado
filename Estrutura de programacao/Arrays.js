var meuArray = ["daniel", "alexa", "google", "amazon", "javascript"];
console.log(meuArray);

console.log(meuArray.length);

meuArray.map((item) => {
    console.log(item);
})

//junta tudo do array em string com espaço
var testeJoin = meuArray.join(" ");
console.log(testeJoin);

//verificar se o array possui determinado valor
meuArray.includes("javascript")
console.log(meuArray.includes("javascript"));

let arrayNumeros = []

arrayNumeros.push(1)
arrayNumeros.push(2)

arrayNumeros = [...arrayNumeros, 3, 4, 5]

console.log(arrayNumeros);

let soma2 = 0
arrayNumeros.map(item => {
    soma2 += item;
    console.log(soma2);
})

const reducer = (prev, currentV) => prev + currentV;

const resultado = arrayNumeros.reduce(reducer)
console.log("🚀 ~ file: Arrays.js ~ line 36 ~ resultado", resultado)
