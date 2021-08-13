// arrow function
const boaNoite = ()=> console.log('boa noite')
boaNoite()

const saudacao = nome => `Fala  ${nome}, blz!!!` 

console.log(saudacao('joao'))

const somar = (...numeros) =>{
    console.log(Array.isArray(numeros))
    let soma = 0
    for(let n of numeros){
        soma+=n
    }
    return soma
}

console.log(somar(1,2,3,4,5,6,7))
console.log(somar(1,2,3,4,5,6,7,8,9,10))

const potencia = base => expoente => Math.pow(base, expoente)


console.log(potencia(3)(2))

// this
Array.prototype.ultimo = function(){
    console.log(this[this.length-1])
}

Array.prototype.primeiro = function(){
    console.log(this[0])
}
const numeros = [1,2,3]
numeros.ultimo()
numeros.primeiro()