var pessoa = {
  nome: "Pedro",
  idade: 24,
  profissao: "Desenvolvedor",
};

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * this.lados;
  },
};

//ATIVIDADE

const pedro = {
  nome: "Pedro Lucas",
  sobrenome: "Dos Santos Neto",

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

var cachorro = {
  raca: "Labrador",
  idade: 10,
  cor: "preto",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latido";
    } else {
      return "";
    }
  },
};
