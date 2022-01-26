console.log("Tipo de dado: ", typeof 10);
console.log("Tipo de dado: ", typeof 12.5);
console.log("Tipo de dado: ", typeof -12.5);
console.log("Tipo de dado: ", typeof NaN); //erro: Not A Number
console.log("Tipo de dado: ", typeof 123e5); //exponencial
console.log("Tipo de dado: ", typeof Infinity); 

console.log("Soma 3+5: ", 3+5);
console.log("Multiplicação 3*5: ", 3*5);
console.log("Divisão 10/5: ", 10/5);
console.log("Módulo 12/5: ", 12%5);

//INCREMENTO, DECREMENTO
var num = 5;
console.log(num++);
console.log(num);

var x = 7;
x += 3;
console.log(x);

var y = 2;
y *= 3;
console.log(y);

y/=2;
console.log(y);

//toFixed(2) 2 casas decimais
num = 330.6;
num /= 4;
console.log(num.toFixed(2));

//isInteger (é numero inteiro?)