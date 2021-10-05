// esperar 3 seg
// gerar  numeros de 500
// depois de 10 seg unsubscribe

const { timer, Observable, Subscription } = require("rxjs");


function gerarNumeros(){
    return new Observable(subscribe => {
        setInterval(()=> {
            subscribe.next(Math.random() * 500 + 1)
        }, 3000)
    })
}

const obs1 = gerarNumeros()

const sub1 = obs1.subscribe(console.log)

// resolução
const obs2 = timer(3000, 500)

const sub2 = obs2.subscribe(num => {
    console.log(`#1 gerou o numero ${num}`)
})

const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)
// sub1.add(sub2)

setTimeout(()=> {
    sub.unsubscribe()
}, 10000)
