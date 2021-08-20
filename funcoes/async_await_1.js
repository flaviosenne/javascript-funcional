function esperarPor(tempo= 2000){
    return new Promise( resolve => {
        setTimeout(()=> resolve(), tempo)
    })
}

// esperarPor()
// .then(()=> console.log('Executando promise 1...'))
// .then(esperarPor)
// .then(()=> console.log('Executando promise 2...'))
// .then(esperarPor)
// .then(()=> console.log('Executando promise 3...'))
function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

async function retornarValorRapido(){
    return 20
}

const executar = async () => {

    const valor = await retornarValor()
    const valor2 = await retornarValorRapido()
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor+1}...`)

    
    await esperarPor(1500)
    console.log(`Async/Await ${valor+2}...`)

    return valor + 3
}

async function executarDeVerdade(){

    const res = await executar()

    console.log(res)
}

executarDeVerdade()

