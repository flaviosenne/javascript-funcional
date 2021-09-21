const fn = require('./funcoes')
const { join }= require('path')

const pathFiles = join(__dirname,'..', 'dados','legendas')

const symbols = [ 
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>','</i>', '\r','[', ']',
    '(', ')'
]

const wordsMostUsed = fn.composition(
    fn.readDir,
    fn.elementsEndWith('.srt'),
    fn.readFiles,
    fn.joinElements,
    fn.splitTextBy('\n'),
    fn.removeElementsIfEmpty,
    fn.removeElementsIfInclude('-->'),
    fn.removeElementsIfOnlyNumber,
    fn.removeSymbols(symbols),
    fn.joinElements,
    fn.splitTextBy(' '),
    fn.removeElementsIfEmpty,
    fn.removeElementsIfOnlyNumber,
    fn.groupWords,
    fn.sortByAtributteNumber('quantidade', 'desc')
)

wordsMostUsed(pathFiles)
.then(console.log)