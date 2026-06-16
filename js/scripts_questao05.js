const formulario = document.querySelector("#triângulo");
const divDados = document.querySelector("#div-dados");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const lado1 = Number(document.querySelector("#lado1").value);
    const lado2 = Number(document.querySelector("#lado2").value);
    const lado3 = Number(document.querySelector("#lado3").value);

    let resultado = "";

    if (lado1 === lado2 && lado2 === lado3) {
        resultado = "Triângulo Equilátero";
    } else if (
        lado1 === lado2 ||
        lado1 === lado3 ||
        lado2 === lado3
    ) {
        resultado = "Triângulo Isósceles";
    } else {
        resultado = "Triângulo Escaleno";
    }

    divDados.innerHTML = `<h3>${resultado}</h3>`;
});