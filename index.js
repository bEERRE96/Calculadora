const contenedor = document.querySelector(".container");
const pantalla = document.querySelector(".pantalla");
const teclas = document.querySelectorAll("button");

let cifras = [];
let operador;
let resultado = 0;

function inicio() {
  if (cifras.length === 0 && operador === undefined) {
    pantalla.innerText = 0;
  } else {
    pantalla.innerText = cifras.join("");
  }
}

// BORRAR DE A 1
teclas[0].addEventListener("click", () => {
  cifras.pop();
  inicio();
});

inicio();

//TECLA 7

teclas[4].addEventListener("click", () => {
  cifras.push(7);
  pantalla.innerText = cifras.join("");
});

// TECLA 8

teclas[5].addEventListener("click", () => {
  cifras.push(8);
  pantalla.innerText = cifras.join("");
});

// TECLA 9
teclas[6].addEventListener("click", () => {
  cifras.push(9);
  pantalla.innerText = cifras.join("");
});

teclas[8].addEventListener("click", () => {
  cifras.push(4);
  pantalla.innerText = cifras.join("");
});

teclas[9].addEventListener("click", () => {
  cifras.push(5);
  pantalla.innerText = cifras.join("");
});

teclas[10].addEventListener("click", () => {
  cifras.push(6);
  pantalla.innerText = cifras.join("");
});

teclas[12].addEventListener("click", () => {
  cifras.push(1);
  pantalla.innerText = cifras.join("");
});
teclas[13].addEventListener("click", () => {
  cifras.push(2);
  pantalla.innerText = cifras.join("");
});
teclas[14].addEventListener("click", () => {
  cifras.push(3);
  pantalla.innerText = cifras.join("");
});
teclas[16].addEventListener("click", () => {
  cifras.push(0);
  pantalla.innerText = cifras.join("");
});

//SUMA
teclas[15].addEventListener("click", () => {
  resultado += Number(cifras.join(""));
  cifras = [];
  operador = "+";
  let resultado2 = Number(cifras.join(""));
  resultado += resultado2;
  pantalla.innerText = resultado;
});

//IGUAL
teclas[18].addEventListener("click", () => {
  let resultado2 = Number(cifras.join(""));
  if (operador === "+") {
    resultado += resultado2;
    pantalla.innerText = resultado;
  }
  cifras = [];
  operador = "";
});
