let input = document.getElementById("pantalla");

function enviar(num) {
  input.value += num;
}

function borrar() {
  input.value = "";
}

function calcular() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}
