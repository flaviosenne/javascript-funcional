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

function ultimo(){
    return function(source){
        return new Observable(subscriber => {
            source.subscribe({
                next(v){
                    subscriber.next(v + 1000)    
                }
            })
        })
    }
}

from([1,2,3,4,5])
// .pipe(primeiro())
.pipe(ultimo())
.subscribe(console.log)