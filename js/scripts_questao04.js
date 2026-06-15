//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#media')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let n1 = parseFloat(objFormDados.get('nota1'))
    let n2 = parseFloat(objFormDados.get('nota2'))
    let n3 = parseFloat(objFormDados.get('nota3'))
    let situacao = "";
    let media = (n1 + n2 + n3) / 3 

if(media>=6) {
    situacao = "APROVADO";
} else {
    situacao ="REPROVADO";   
}

divResultado.innerHTML =
    `A MÉDIA DE ANA RUTE É: ${media.toFixed(2).replace('.', ',')} <br>
     SITUAÇÃO: ${situacao}`;


 })