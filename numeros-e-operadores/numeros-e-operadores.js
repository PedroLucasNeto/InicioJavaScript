var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

var teste = NaN;

10 == "10"; // true
10 == 10; //true
10 === "10"; //false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

true && true; // true

true || true; // true

var numero = 20;

numero += 20;
console.log(numero);
numero /= 20;
numero -= 20;
numero *= 20;

var idade = 18;
var naoPossuiDiabetes = true;

var podeBeber =
  idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";

console.log(podeBeber);
