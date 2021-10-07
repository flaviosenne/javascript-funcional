const fn = require('./funcoes')
const { join }= require('path')
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs')
const _ = require('lodash')

const pathFiles = join(__dirname,'..', 'dados','legendas')

const symbols = [ 
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>','</i>', '\r','[', ']',
    '(', ')', '!'
]

fn.readDir(pathFiles)
.pipe(
    fn.elementsEndWith('.srt'),
    fn.readFile(),
    fn.splitTextBy('\n'),
    fn.removeElementsIfEmpty(),
    fn.removeElementsIfBeginWithNumber(),
    fn.removeSymbols(symbols),
    fn.splitTextBy(' '),
    fn.removeElementsIfEmpty(),
    fn.removeElementsIfBeginWithNumber(),
    groupBy(el => el.toLowerCase()),
    // mergeMap(group => group.pipe(reduce((acc, i) => [...acc, i], [])))
    mergeMap(group => group.pipe(toArray())),
    map(words => ({elemento: words[0], quantidade: words.length})),
    toArray(),
    map(array => _.sortBy(array, el => -el.quantidade))

)
.subscribe(console.log)
