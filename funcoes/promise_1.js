let a = 1
console.log(a)

let p = new Promise(function (cumprirPromesa){
    // cumprirPromesa({x:3, y:4})
    cumprirPromesa(['Ana','Bia', 'Carlos', 'Daniel'])
})
const primeiroElemento = function (array){
    return array[0]
}

const primeiraLetra = function (string){
    return string[0]
}
const letraMinuscula = letra =>letra.toLowerCase()


p
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log) // .then(v => console.log(v)) é a mesma coisa