var btn = document.querySelector(".btn");

function eventosTeclas(event) {
  if (event.key == "ArrowUp") {
    btn.innerText = "Up";
  } else if (event.key == "Escape") {
    console.log("saiu");
  } else if (event.key == "ArrowDown") {
    btn.innerText = "Down";
  } else if (event.key == "ArrowLeft") {
    btn.innerText = "Left";
  } else if (event.key == "ArrowRight") {
    btn.innerText = "Right";
  }
}

// btn.classList.add("azul");

document.addEventListener("keydown", eventosTeclas);

// document.removeEventListener("keydown", eventosTeclas);
