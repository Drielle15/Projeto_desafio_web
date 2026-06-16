// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#imc');
const divResultado = document.querySelector('#div-dados');

// SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // PEGANDO VALORES DO FORMULÁRIO
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // CÁLCULO DO IMC
    const imc = peso / (altura * altura);

    let massa= "";

    if (imc < 20) {
        massa = "abaixo do peso";
    } else if (imc < 25) {
        massa = "normal";
    } else if (imc < 30) {
        massa = "excesso de peso";
    } else if (imc < 35) {
        massa = "obesidade";
    } else {
        massa = "obesidade mórbida";
    }

    // MOSTRAR NA TELA
    divResultado.innerHTML = `
        <p>Paciente: ${nome}</p>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Faixa de risco: ${massa}</p>
    `;
});
