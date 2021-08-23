const fn = require('./funcoes')
const { join }= require('path')

const pathFiles = join(__dirname,'..', 'dados','legendas')

fn.readDir(pathFiles)
.then(fn.elementsEndWith('.srt'))
// .then(file => fn.elementsEndWith('.srt')(file))
.then(fn.readFiles)
.then(contents => contents.join('\n'))
.then(Allcontent => Allcontent.split('\n'))
.then(fn.removeElementsIfEmpty)
.then(fn.removeElementsIfInclude('-->'))
// é a mesma coisa com o de de baixo
// .then(lines => fn.removeElementsIfInclude('-->')(lines)) 
.then(fn.removeElementsIfOnlyNumber)
.then(console.log)