var lista = [];

var videoGames = ["Switch", "XBOXOne", "PS4"];

for (let numero = 0; numero < 10; numero++) {
  if (videoGames[numero] === "PS4") {
    console.log("Achou na posição " + numero);
    break;
  }
}

for (let numero = 0; numero < 10; numero++) {
  videoGames.push("Numero" + (numero + 1));
}

for (let numero = 0; numero < videoGames.length; numero++) {
  console.log(videoGames[numero]);
}

// for (let numero = 0; numero < videoGames.length; numero++) {
//   console.log(videoGames[numero]);
// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// videoGames.forEach(function () {
//   console.log("Oi");
// });

var frutas = ["Pera", "Uva", "Maça", "Salada Mista"];

frutas.forEach(function (elemento, index) {
  console.log(elemento, index);
});

// frutas.forEach(function (fruta) {
//   console.log(fruta);
// });

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

brasilCampeao.forEach(function (ano) {
  console.log(`O brasil ganhou a copa no ano de: ${ano}`);
});
