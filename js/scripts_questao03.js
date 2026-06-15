const formDados = document.querySelector('#Calculo');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    const distancia = parseFloat(objFormDados.get('distancia'));
    const consumo = parseFloat(objFormDados.get('consumo'));
    const preco = parseFloat(objFormDados.get('preco'));

    const combustivel = distancia / consumo;
    const custoTotal = combustivel * preco;

    divResultado.innerHTML =
        "<p>Combustível necessário: " + combustivel.toFixed(2) + " litros</p>" +
        "<p>Valor total: R$ " + custoTotal.toFixed(2) + "</p>";
});