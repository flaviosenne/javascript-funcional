function bomDia(){
    console.log('Bom dia!')
}

const boaTarde = function (){
    console.log('Boa tarde!')
}

// 1) passar uma função como parametro  para outra
function executarQualCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

executarQualCoisa(3)
executarQualCoisa(bomDia)
executarQualCoisa(boaTarde)

// 2)  retornar uma função a partir de outra função

function potencia(base){
    return function (expoente){
        return Math.pow(base, expoente)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(2)(7))