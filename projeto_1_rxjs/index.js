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
    fn.elementsEndWith('.srt')
)
.subscribe(console.log)
