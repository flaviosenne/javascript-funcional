const { of, Observable } = require('rxjs')


function finishedWith(finalPart){
    return function(source){
        return new Observable(subscriber => {
            source.subscribe({
                next(value){
                    if(Array.isArray(value)){
                        subscriber.next(
                            value.filter(element => element.endsWith(finalPart))
                        )
                    }
                    else if(value.endsWith(finalPart)){
                        subscriber.next(text)
                    }
                },
                error(e){
                    subscriber.error(e)
                },
                complete(){
                    subscriber.complete()
                }
            })
        })
    }
}

of(['Ana Silva', 'Maria Silva', 'Perdo Rocha'])
.pipe(
    finishedWith('Silva')
)
.subscribe(console.log)