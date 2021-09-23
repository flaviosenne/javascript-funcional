const letrasAninhadas = [
    ['O',['l'],'á'],
    [' '], 
    ['m', ['u', ['n']], 'd','o'],
    ['!','!']
]

const letras =letrasAninhadas.flat(Infinity)

const resultado = letras
.flatMap(letra => [letra, ','])
.reduce((a,b) => a + b)

console.log(resultado)