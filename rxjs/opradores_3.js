const { Observable} = require('rxjs')

function elementsWithDelay(time, ...elements){
    return Observable.create(subscriber => {
        (elements || []).forEach((el, i) => {
            setTimeout(()=> {
                subscriber.next(el)
                if(elements.length === i + 1){
                    subscriber.complete()
                }
            }, time * (i +1))
        })
    })
}

elementsWithDelay(1000, 1,'Bia',false,4,5,[1,2,3])
.subscribe(console.log)