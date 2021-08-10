function esperarPor(tempo){
    const futuro = Date.now() + tempo

    while(Date.now() < futuro){
        
    }
}
setTimeout(()=> console.log('exec 01'), 400)
setTimeout(()=> {
    esperarPor(3000)
    console.log('exec 02')
}, 300)

// a função esperarPor está na fila de execução (stack) e tem o delay de 5 segundos
// após isso existe dois eventos setTimeout, na fila de evento (event queue), e será chamado
// a função que tem o menor tempo cadastrado. Só será executado a outra função na fila de evento
// quando terminar a função anterior. Por mais que o tempo já tenha batido, deve esperar o fim
// da execução da função ques está na stack
esperarPor(5000)
console.log('fim!') 