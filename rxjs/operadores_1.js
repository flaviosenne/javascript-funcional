// os dois tipos...
//   1. operadores de criação
const { of, from } = require('rxjs')

//   2. operadores encadeáveis (pipeable op.)
const { last, map }= require('rxjs/operators')

const obs = of(1,2, 'ana', false, 'ultimo')
const obsArray = from([1,2, 'ana', false, 'ultimo'])

obs
.pipe(
    last(),
    map(v => v[0]),
    map(v => `a letra encontrada foi: ${v}`)
)
.subscribe(function (valor){
    console.log(`o valor gerado foi ${valor}`)
})