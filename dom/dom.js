// console.log(window);
// window e document serão os mais utilizados

const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/dom/index.html") {
  console.log("Ta acessando certinho");
} else {
  window.alert("Alerta!");
}

//para acessar uma tag:

const h1Selecionado = document.querySelector("h1");

console.log(h1Selecionado);

const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener("click", callbackh1);

function callbackh1() {
  console.log("Clicou em", h1Selecionado.innerText);
}

//

const linguagem = window.navigator.language;
console.log(linguagem);
