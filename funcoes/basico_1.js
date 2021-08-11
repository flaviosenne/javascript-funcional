// function declaration
function bomDia(){
    console.log('Bom dia')
}

bomDia()

// function expression

const boaTarde = function () {
    console.log('Boa tarde')
}

let x = boaTarde() // undefined

function soma(a, b){
    return a + b
}

let reultado = soma(3,4, 5, 6, 7)
console.log(reultado)
reultado = soma(3)// NaN
console.log(reultado) 
reultado = soma()// NaN
console.log(reultado) 