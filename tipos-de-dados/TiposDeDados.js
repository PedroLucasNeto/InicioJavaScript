var nome = "Pedro";
var idade = 24;
var possuiFaculdade = false;
var time;
var comida = null;
var simbolo = Symbol();
var objeto = {};
let test = 1;
const usuario = { nome: "Pedro", cidade: "Campina Grande" };
const list = [usuario, 1, 2, 3, 4, 5];

const listaRtorno = list.map((a, posicao) => (posicao == 1 ? a.nome : test));

console.log(listaRtorno);
// list.filter();
// list.reduce();
// list[0] = usuario;
// console.log(list[0]);

var exp = 22;
console.log(exp);
