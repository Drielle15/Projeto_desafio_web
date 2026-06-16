const formDados = document.querySelector('#divisível');
const divResultado = document.querySelector('#div-dados')
formDados.addEventListener("submit", function(evt) {
    evt.preventDefault();

    
let numero = parseInt(document.querySelector("#numero").value);

    if (numero % 3 === 0 && numero % 7 === 0) {
     divResultado.innerHTML = `O número ${numero} é divisível por 3 e 7.`;
    } else if (numero % 3 === 0) {
        divResultado.innerHTML = `O número ${numero} é divisível por 3, mas não por 7.`;
    }else if ( numero % 7 === 0){
     divResultado.innerHTML = `O número ${numero} é divisível por 7, mas não por 3.`;
}else{
     divResultado.innerHTML = `O número ${numero} não é divisivel por 3 nem por 7`;
}
});