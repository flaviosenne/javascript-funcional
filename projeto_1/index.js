const fn = require('./funcoes')
const { join }= require('path')

const pathFiles = join(__dirname,'..', 'dados','legendas')

fn.readDir(pathFiles)
.then(files => fn.elementsEndWith(files, '.srt'))
.then(filesSRT => fn.readFiles(filesSRT))
.then(contents => contents.join('\n'))
.then(Allcontent => Allcontent.split('\n'))
.then(lines => fn.removeIfEmpty(lines))
.then(lines => fn.removeIfInclude(lines, '-->'))
.then(lines => fn.removeIfOnlyNumber(lines))
.then(console.log)