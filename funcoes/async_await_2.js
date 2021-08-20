function gerarNumerosEntre(min, max, numerosProibido){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = max -min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibido.includes(aleatorio)){
            reject('Numero repetido')
        } else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtde, tentativa = 1){
    try{
        const numeros = []
        for(let _ of Array(qtde).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    }catch(e){
        if(tentativa > 10){
            throw "Não deu certo"
        }else{
            return gerarMegaSena(qtde, tentativa+1)
        }
    }
}

gerarMegaSena(25)
.then(console.log)
.catch(console.log)