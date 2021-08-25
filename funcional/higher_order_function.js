function executar(fn, ...params){
    return function(texto){
        return `${texto} ${fn(...params)}!`
    }
}

function somar(a,b,c){
    return a + b + c
}

function multiplicar(a,b){
    return a * b
}

const r1 = executar(somar, 4,5,6)('O resultado da soma é')
const r2 = executar(multiplicar, 40,30)('O resultado da multiplicação é')

console.log(r1)
console.log(r2)

