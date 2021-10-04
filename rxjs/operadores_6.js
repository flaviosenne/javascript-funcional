const { from , Observable} = require('rxjs')

function createPipeableOperator(nextGenerator){
    return function(source){
        return Observable.create(subscribe => {
             source.subscribe({
                next: nextGenerator(subscribe)
             })
        })
    }
} 

function first(){
    // return createPipeableOperator((subscribe, v)=> {
    //     subscribe.next(v)
    //     subscribe.complete()
    // })
    return createPipeableOperator(function(subscribe){
        return function(v){
            subscribe.next(v)
            subscribe.complete()
        }
    })
}

function nothing(){
    return function(source){
        return Observable.create(subscribe => {
             source.subscribe({
                 next(v){
                     subscribe.complete()
                 }
             })
        })
    }
}

function last(){
    return function(source){
        return new Observable(subscriber => {
            let ultimo
            source.subscribe({
                next(v){
                    ultimo = v
                }, 
                complete(){
                    if(ultimo !== undefined){
                        subscriber.next(ultimo)  
                    }
                    subscriber.complete()
                }
            })
        })
    }
}

from([1,2,3,4,5])
.pipe(
    first()
    )
.subscribe(console.log)