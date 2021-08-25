let qntDeExecucoes = 0
// pura
function somar(a, b){
    qntDeExecucoes++ // efeito colateral observavel
    return a + b
}

console.log(qntDeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qntDeExecucoes)