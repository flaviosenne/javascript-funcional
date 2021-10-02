const { from, asapScheduler }= require('rxjs')
const { observeOn }= require('rxjs/operators')

console.log('Inicio')

from([1,2,3,4,5,6,7,8,9,10])
.pipe(observeOn(asapScheduler))
.subscribe(console.log)

console.log('Fim')