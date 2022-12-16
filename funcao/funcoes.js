function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(109));

function pi() {
  return 3.14;
}

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(73, 1.7));

//Função anônima

addEventListener("click", function () {
  console.log("Harlon meu amor");
});

function mostraConsole() {
  console.log("Oi");
}

addEventListener("click", imc);
