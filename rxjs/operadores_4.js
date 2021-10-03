const { from , Observable} = require('rxjs')

function primeiro(){
    return function(source){
        return Observable.create(subscribe => {
             source.subscribe({
                 next(v){
                     subscribe.next(v)
                     subscribe.complete()
                 }
             })
        })
    }
}

function nenhum(){
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

function ultimo(){
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
    primeiro(),
    nenhum(),
    ultimo(),
    )
.subscribe(console.log)