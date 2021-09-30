const {Observable, noop} = require('rxjs')

const obs$ = Observable.create(subscribe => {
    subscribe.next('Rxjs')
    subscribe.next('é')
    subscribe.next('bem')
    subscribe.next('poderoso')

    if(Math.random() > 0.5){
        subscribe.complete()
    }else{
        subscribe.error('Qual problema?')
    }
}) 

obs$.subscribe(
    valor => console.log(`Valor: ${valor}`),
    noop,
    // erro => console.log(`Erro: ${erro}`),
    () => console.log('Fim')
    )

    obs$.subscribe({
        next(valor){
            console.log(`Valor: ${valor}`)
        },
        error(msg){
            console.log(`Erro: ${msg}`)
        },
        complete(){
            console.log('Fim')
        }
    })