//Esse tipo de declaração de variável,
// permite que a variável seja acessada
// fora do escopo;

if (true) {
  var carro = "Fusca";
  console.log(carro);
}

console.log(carro);

//Nesses casos, o valor fora do escopo será UNDEFINED,
// porque o valor da variável não está sendo acessado
if (true) {
  const mes = "Janeiro";
  console.log(mes);
}

// console.log(mes);

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// console.log(i);

//Const e let são maneiras de declarar variáveis mais seguramente
//uma vez que não deixa passar pra fora do escopo;

const variavel = 0;
//const não permite mudar o valor da variável;

const semana = "Sexta";

//nesse caso, podemos criar um objeto e mudar seus atributos
//porém o objeto não pode deixar de ser uma data ainda que
//seus atributos tenham sido alterados;
const data = {
  dia: 1,
  mes: 12,
  ano: 2023,
};

console.log(data);

//let permite redeclarar a constante;
let variavel1 = 0;

variavel1 = 2;
variavel1 = 3;
