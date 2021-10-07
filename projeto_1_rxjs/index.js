const fn = require('./funcoes')
const { join }= require('path')
const fs = require('fs')

const pathFiles = join(__dirname,'..', 'dados','legendas')

const symbols = [ 
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>','</i>', '\r','[', ']',
    '(', ')'
]

fn.readDir(pathFiles)
.pipe(
    fn.elementsEndWith('.srt'),
    fn.readFile(),
    fn.splitTextBy('\n'),
    fn.removeElementsIfEmpty(),
)
.subscribe(console.log)
