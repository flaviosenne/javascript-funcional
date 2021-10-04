const { from , Observable} = require('rxjs')

function createPipeableOperator(operatorFn){
    return function(source){
        return Observable.create(subscribe => {
            const sub = operatorFn(subscribe) 
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscribe.error(e)),
                complete: sub.complete || (() => subscribe.complete())
            })
        })
    }
} 

function first(){
    return createPipeableOperator(subscribe => ({
        next(v){
            subscribe.next(v)
            subscribe.complete()
        }
    }))
}

function nothing(){
    return createPipeableOperator(subscribe => ({
        next(v){
            subscribe.complete()
        }
    }))
}

function last(){
    let ultimo
    return createPipeableOperator(subscribe => ({
        next(v){
            ultimo = v
        }, 
        complete(){
            if(ultimo !== undefined){
                subscribe.next(ultimo)  
            }
            subscribe.complete()
        }
    }))
}

from([1,2,3,4,5])
.pipe(
    // first()
    // nothing()
    last()
    )
.subscribe(console.log)