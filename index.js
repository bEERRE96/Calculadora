let pantalla = document.getElementById('pantalla');
let botonC = document.getElementById('C');
let botonCE = document.getElementById('CE');
let botonUno = document.getElementById('uno');
let botonDos = document.getElementById('dos');
let botonTres = document.getElementById('tres');
let botonCuatro = document.getElementById('cuatro');
let botonCinco = document.getElementById('cinco');
let botonSeis = document.getElementById('seis');
let botonSiete = document.getElementById('siete');
let botonOcho = document.getElementById('ocho');
let botonNueve = document.getElementById('nueve');
let botonCero = document.getElementById('cero');
let botonPunto = document.getElementById('punto');
let botonSuma = document.getElementById('suma');
let botonResta = document.getElementById('resta');
let botonMulti = document.getElementById('multi');
let botonDivi = document.getElementById('divi');
let botonIgual = document.getElementById('igual');
let operacionMat = document.querySelector("#simboloOperacion")
let potencia = document.getElementById("potencia")
let cuadrado = document.getElementById("cuadrado")

let num1 = "0";
let num2 = "0";
let resultado;
let operador = '';
let estado = false;
let valorEnPantalla = '0';

pantalla.value = num1;


function manejarClickNumerico(numero) {
  if (operador === '') {
    if (valorEnPantalla == '0' && numero != '.') {
      num1 = numero.toString();
      valorEnPantalla = num1;
    } else if (!num1.includes('.') || numero != '.') {
      num1 += numero;
      valorEnPantalla = num1;
    }
  } else {
    if (num2 == '0' && numero != '.') {
      num2 = numero.toString()
      valorEnPantalla = num2;
    } else if (!num2.includes('.') || numero != '.') {
      num2 += numero;
      valorEnPantalla = num2;
    }
  }
  pantalla.value = valorEnPantalla;
}

botonUno.addEventListener('click', () => {
  manejarClickNumerico('1');
});

botonDos.addEventListener('click', () => {
  manejarClickNumerico('2');
});

botonTres.addEventListener('click', () => {
  manejarClickNumerico('3');
});

botonCuatro.addEventListener('click', () => {
  manejarClickNumerico('4');
});

botonCinco.addEventListener('click', () => {
  manejarClickNumerico('5');
});

botonSeis.addEventListener('click', () => {
  manejarClickNumerico('6');
});

botonSiete.addEventListener('click', () => {
  manejarClickNumerico('7');
});

botonOcho.addEventListener('click', () => {
  manejarClickNumerico('8');
});

botonNueve.addEventListener('click', () => {
  manejarClickNumerico('9');
});

botonCero.addEventListener('click', () => {
  manejarClickNumerico('0');
});

let operacion = document.createElement("span")
function changeOperator(op) {
  if(operador == "" || resultado == undefined){
    operador = op;
    operacion.innerText = operador == "+" ? `${operador} (Suma)` : operador == "-" ? `${operador} (Resta)` : operador == "*" ? `${operador} (Multiplicacion)` : operador == "/" ? `${operador} (Division)` : null
    operacionMat.appendChild(operacion)
  }

}

botonSuma.addEventListener('click', () => {
  changeOperator('+');
});

botonResta.addEventListener('click', () => {
  changeOperator('-');
});

botonMulti.addEventListener('click', () => {
  changeOperator('*');
});

botonDivi.addEventListener('click', () => {
  changeOperator('/');
});

function changeResult() {
  if (num1 !== '' && num2 !== '') {
    if (operador === '+') {
      resultado = parseFloat(num1) + parseFloat(num2);
    } else if (operador === '-') {
      resultado = parseFloat(num1) - parseFloat(num2);
    } else if (operador === '*') {
      resultado = parseFloat(num1) * parseFloat(num2);
    }
    else if (operador === 'pow') {
      resultado = Math.pow(parseFloat(num1),parseFloat(num2));
    }
    else if (operador === '/') {
      if (parseFloat(num2) !== 0) {
        resultado = parseFloat(num1) / parseFloat(num2);
      } else {
        pantalla.value = "Error: División por cero";
        return;
      }
    }

    if (resultado < 0) {
      pantalla.style.direction = 'ltr';
    } else {
      pantalla.style.direction = 'rtl';
    }

    pantalla.value = resultado;
    num1 = resultado.toString(); // Asigna el resultado a num1
    num2 = ''; // Reinicia num2
    operador = '';
    estado = true;
  } else if (operador === '/' && parseFloat(num2) === 0) {
    pantalla.value = "Error: División por cero";
  }
}

botonIgual.addEventListener('click', () => {
  changeResult();
});


botonC.addEventListener('click', () => {
  if (estado == false) {
    changeDelete();
  } else {
    changeReset();
  }
});

function changeDelete() {
  if (valorEnPantalla.length > 1) {
    valorEnPantalla = valorEnPantalla.slice(0, -1);
  } else {
    valorEnPantalla = '0';
  }
  if (operador === '') {
    num1 = valorEnPantalla;
  } else {
    num2 = valorEnPantalla;
  }
  pantalla.value = valorEnPantalla;
}

function changeReset() {
  num1 = '0';
  num2 = '0';
  operador = '';
  estado = false;
  valorEnPantalla = '0';
  pantalla.value = num1;
  operacion.innerText = operador
}

botonCE.addEventListener('click', () => {
  changeReset();
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.key == '1') {
    manejarClickNumerico('1');
  } else if (e.key == '2') {
    manejarClickNumerico('2');
  } else if (e.key == '3') {
    manejarClickNumerico('3');
  } else if (e.key == '4') {
    manejarClickNumerico('4');
  } else if (e.key == '5') {
    manejarClickNumerico('5');
  } else if (e.key == '6') {
    manejarClickNumerico('6');
  } else if (e.key == '7') {
    manejarClickNumerico('7');
  } else if (e.key == '8') {
    manejarClickNumerico('8');
  } else if (e.key == '9') {
    manejarClickNumerico('9');
  } else if (e.key == '0') {
    manejarClickNumerico('0');
  } else if (e.key == '+') {
    changeOperator('+');
  } else if (e.key == '-') {
    changeOperator('-');
  } else if (e.key == '*') {
    changeOperator('*');
  } else if (e.key == '/') {
    changeOperator('/');
  } else if (e.key == 'Enter') {
    changeResult();
  } else if (e.key == 'Backspace') {
    if (estado == false) {
      changeDelete();
    } else {
      changeReset();
    }
  }
  else if (e.key == '.') {
    changeFloat(".");
  }
});


function changeFloat(numero){
  if (operador === '') {
    if (!num1.includes('.')) {
      num1 += numero;
      pantalla.value = num1;
    }
  } else {
    if (!num2.includes('.')) {
      num2 += numero;
      pantalla.value = num2;
    }
  }
}
botonPunto.addEventListener("click", () => {
  changeFloat(".")
})

potencia.addEventListener("click", () => {
operador = "pow"
})

cuadrado.addEventListener("click", () => {
  resultado = Math.pow(parseFloat(num1), 2)
  pantalla.value = resultado; 
})

let negativo = document.getElementById("negativo")

negativo.addEventListener("click", () => {
  pantalla.style.direction = 'ltr';
  if(operador == ""){
    if(num1 > 0){
      num1 = -(num1)
      valorEnPantalla = num1
      pantalla.value = valorEnPantalla
    }
  }
  else{
    if(num2 > 0){
      num2 = -(num2)
      valorEnPantalla = num2
      pantalla.value = valorEnPantalla
    }
  }
})