var colores = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "#7030A0",
  "grey",
  "white",
];

var coloresMul = {
  1: "black",
  10: "brown",
  100: "red",
  1000: "orange",
  10000: "yellow",
  100000: "green",
  1000000: "blue",
  10000000: "#7030A0",
  100000000: "grey",
  1000000000: "white",
  0.1: "gold",
  0.01: "silver",
};

var coloresTol = {
  "+/- 1%": "brown",
  "+/- 2%": "red",
  "+/- 0.5%": "green",
  "+/- 0.25%": "blue",
  "+/- 0.10%": "#7030A0",
  "+/- 0.05%": "grey",
  "+/- 5%": "gold",
  "+/- 10%": "silver",
};

document.getElementById("banda1").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_1_1");

  banda.style.backgroundColor = colores[color_1];
});

document.getElementById("banda2").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_1_2");

  banda.style.backgroundColor = colores[color_1];
});

document
  .getElementById("multiplicador")
  .addEventListener("change", function () {
    let color_1 = parseFloat(this.value, 10);
    let banda = document.getElementById("banda_1_mul");

    banda.style.backgroundColor = coloresMul[color_1];
  });

document.getElementById("banda1_2").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_2_1");

  banda.style.backgroundColor = colores[color_1];
});

document.getElementById("banda2_2").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_2_2");

  banda.style.backgroundColor = colores[color_1];
});

document
  .getElementById("multiplicador_2")
  .addEventListener("change", function () {
    let color_1 = parseFloat(this.value, 10);
    let banda = document.getElementById("banda_2_mul");

    banda.style.backgroundColor = coloresMul[color_1];
  });

document.getElementById("tolerancia").addEventListener("change", function () {
  let color_1 = this.value;
  let banda = document.getElementById("banda_tolerancia");

  banda.style.backgroundColor = coloresTol[color_1];
});

document.getElementById("banda1_3").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_3_1");

  banda.style.backgroundColor = colores[color_1];
});

document.getElementById("banda2_3").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_3_2");

  banda.style.backgroundColor = colores[color_1];
});

document.getElementById("banda3_3").addEventListener("change", function () {
  let color_1 = parseInt(this.value, 10);
  let banda = document.getElementById("banda_3_3");

  banda.style.backgroundColor = colores[color_1];
});

document
  .getElementById("multiplicador_3")
  .addEventListener("change", function () {
    let color_1 = parseFloat(this.value, 10);
    let banda = document.getElementById("banda_3_mul");

    banda.style.backgroundColor = coloresMul[color_1];
  });

document.getElementById("tolerancia_2").addEventListener("change", function () {
  let color_1 = this.value;
  let banda = document.getElementById("banda_tolerancia_2");

  banda.style.backgroundColor = coloresTol[color_1];
});
