function verificaTruth(valor) {
  return !!valor;
}

function perimetro(lado) {
  const resultado = lado * 4;
  return resultado;
}

function nomeCompleto() {
  const nome = "Pedro Lucas";
  const sobrenome = "Dos Santos neto";

  return `${nome} ${sobrenome}`;
}

function verificaParidade(valor) {
  if (valor % 2 == 0) {
    return "Valor é par";
  } else if (valor % 2 == 1) {
    return "Valor é impar";
  } else {
    return "Valor inválido";
  }
}

function retornaTipo(valor) {
  return typeof valor;
}

addEventListener("scroll", function () {
  console.log("Pedro");
});

function mostraConsole() {
  console.log("Oi");
}
