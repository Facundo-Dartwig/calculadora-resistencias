// Calcular resistencia de 3 valores
function calcularResistencia() {
  let banda1 = document.getElementById("banda1").value;
  let banda2 = document.getElementById("banda2").value;
  let multiplicador = document.getElementById("multiplicador").value;

  let resistencia = parseInt(banda1 + banda2) * parseFloat(multiplicador);

  if (parseFloat(resistencia) >= 1000 && parseFloat(resistencia) < 1000000) {
    resistencia = resistencia / 1000 + " K";
  } else if (parseFloat(resistencia) >= 1000000) {
    resistencia = resistencia / 1000000 + " M";
  }
  document.getElementById("valorResistencia").innerText =
    "Valor: " + resistencia + "Ω " + "+/- 20%";
}

function calcularResistencia2() {
  let banda1 = document.getElementById("banda1_2").value;
  let banda2 = document.getElementById("banda2_2").value;
  let multiplicador = document.getElementById("multiplicador_2").value;
  let tolerancia = document.getElementById("tolerancia").value;

  let resistencia = parseInt(banda1 + banda2) * parseFloat(multiplicador);

  if (parseFloat(resistencia) >= 1000 && parseFloat(resistencia) < 1000000) {
    resistencia = resistencia / 1000 + " K";
  } else if (
    parseFloat(resistencia) >= 1000000 &&
    parseFloat(resistencia) < 1000000000
  ) {
    resistencia = resistencia / 1000000 + " M";
  } else if (parseFloat(resistencia) >= 1000000000) {
    resistencia = resistencia / 1000000000 + " G";
  }
  document.getElementById("valorResistencia_2").innerText =
    "Valor: " + resistencia + " Ω " + tolerancia;
}

function calcularResistencia3() {
  let banda1 = document.getElementById("banda1_3").value;
  let banda2 = document.getElementById("banda2_3").value;
  let banda3 = document.getElementById("banda3_3").value;
  let multiplicador = document.getElementById("multiplicador_3").value;
  let tolerancia = document.getElementById("tolerancia_2").value;

  let resistencia =
    parseInt(banda1 + banda2 + banda3) * parseFloat(multiplicador);

  if (parseFloat(resistencia) >= 1000 && parseFloat(resistencia) < 1000000) {
    resistencia = resistencia / 1000 + " K";
  } else if (
    parseFloat(resistencia) >= 1000000 &&
    parseFloat(resistencia) < 1000000000
  ) {
    resistencia = resistencia / 1000000 + " M";
  } else if (parseFloat(resistencia) >= 1000000000) {
    resistencia = resistencia / 1000000000 + " G";
  }
  document.getElementById("valorResistencia_3").innerText =
    "Valor: " + resistencia + " Ω " + tolerancia;
}

// Obtener elementos
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "flex";
};

btn1.onclick = function () {
  modal.style.display = "flex";
};

btn2.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
