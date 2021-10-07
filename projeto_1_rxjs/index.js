const fn = require('./funcoes')
const { join }= require('path')
const fs = require('fs')
const { toArray } = require('rxjs')

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
    toArray(),
    fn.groupElements()

)
.subscribe(console.log)
