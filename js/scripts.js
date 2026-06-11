console.log("teste")

console.log('comando de saída')

//COMENTARIO DE MULTIPLAS LINHAS

/*COMENTÁRIO DE MÚLTIPLAS LINHAS,
OU SEJA, POSSO DESCREVER ALGO
NESSE TIPO DE COMENTÁRIO...
*/

//CRIANDO VARIÁVEIS
let num = 50
var num2 = 180
const num3 = 450

console.log(num)
console.log(num2)
console.log(num3)

if (true) {
    let num4 = 420
    var num5 = 180

console.log(num4)

console.log(num)
}

console.log(num5)

num = 5

console.log(num)

num2 = 6

console.log(num2)

//num3 = 12

//CONCATENAÇÃO
console.log("valor de num" + num)
console.log('Valor de num', num3)
console.log(`Valor de num2 ${num2}`)

console.log(`A soma dos números ` + (15 + 8))
console.log(`A soma dos números `, 15 + 8)
console.log(`A soma dos números ${15 + 8}`)
console.log(`A soma dos números ` + num + num2)
console.log(`A soma dos números `, num2 + 8)
console.log(`A soma dos números ${num + num2}`)

//OPERADORES MATEMÁTICOS
/*
     + SOMA
     - SUBTRAÇÃO
     * MULTIPLICAÇÃO
     / DIVISÃO
*/

console.log(`A soma das variáveis `, num + num2)
console.log(`A soma das variáveis `, num3 - num)
console.log(`Multiplicação `, num2 * 2)
console.log(`Divisão de valores `, num2 / 5)
console.log(`Resto da divisão `, num2 % 2)
console.log(`Resto da divisão ${num % 3}`)


//OPERADORES RELACIONAIS
/*
     == iGUAL
     > MAIOR 
     < MENOR
     >= MAIOR IGUAL
     <= MENOR IGUAL
     != DIFERENTE
 */


//OPREADORES LÓGICOS 
/*
    && E
    || OU
*/

console.log(`TESTE RELACIONAIS ` , 10 == 5)
console.log(`TESTE RELACIONAIS ` , 10 != 5)
console.log(`TESTE RELACIONAIS ` , 10 > 5)
console.log(`TESTE RELACIONAIS ` , 10 < 5)
console.log(`TESTE RELACIONAIS ` , 10 >= 5)
console.log(`TESTE RELACIONAIS ` , 10 <= 5)
console.log(`TESTE LÓGICO` , (10 > 5) && (15 > 8))
console.log(`TESTE LÓGICO `, (10 > 5) || (15 < 8))

//TESTE LÓGICO

let idade = 25

if(idade >=18){
    console.log(`Maior de idade`)
}else{
    console.log(`Menor de idade`)    
}

/*
   *RENOVAÇÃO DE CNH
       MENOR QUE 18 - NÃO PERMITIDO
       18 ATÉ 49 - 10 ANOS
       50 ATÉ 69 - 5 ANOS
       70 ACIMA - 3 ANOS
*/

if (idade < 18){
    console.log(`com idade de $(idade), NÃO PERMITIDO POSSUIR CNH`)
}else if(idade < 50){
    console.log(`Com idade de &(idade), 10 anos para renovar`)
}else if (idade < 70){
    console.log(Com idade de ${idade}, 5 anos para renovar`)
    
}
}
}







