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
.then(fn.elementsEndWith('.srt'))
// é a mesma coisa com o de de baixo
// .then(file => fn.elementsEndWith('.srt')(file))
.then(fn.readFiles)
.then(fn.joinElements)
.then(fn.splitTextBy('\n'))
.then(fn.removeElementsIfEmpty)
.then(fn.removeElementsIfInclude('-->'))
.then(fn.removeElementsIfOnlyNumber)
.then(fn.removeSymbols(symbols))
.then(fn.joinElements)
.then(fn.splitTextBy(' '))
.then(fn.removeElementsIfEmpty)
.then(fn.removeElementsIfOnlyNumber)
.then(fn.groupWords)
.then(fn.sortByAtributteNumber('quantidade', 'desc'))
.then(result => fs.writeFileSync('result.json',JSON.stringify(result, null, 2)))