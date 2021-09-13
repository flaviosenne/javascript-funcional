const fs = require('fs')
const { join }= require('path')

function readDir(path){
    return new Promise((resolve, reject)=> {

        try{
            const files = fs.readdirSync(path).map(file => join(path, file))
            resolve(files)
        }catch(e){
            reject(e)
        }

    })
}

function readFile(path){
    return new Promise((resolve, reject) =>{
        try{
            resolve(fs.readFileSync(path, { encoding: 'utf-8'}).toString())
        }catch(e){
            reject(e)
        }

    })
}

function readFiles(paths){
    return Promise.all(paths.map(path => readFile(path)))
}

function elementsEndWith(standardText,){
    return function(array){
        return array.filter(element => element.endsWith(standardText))
    }
}

function removeElementsIfEmpty(array){
    return array.filter(element => element.trim())
}

function removeElementsIfInclude(standardText){
    return function(array) {
        return array.filter(element => !element.includes(standardText))
    }
}   

function removeElementsIfOnlyNumber(array){
    return array.filter(element => {
        const num = parseInt(element.trim())
        return num !== num
    })   
}

function removeSymbols(symbols){
    return function (array){
        return array.map(element => {
            return symbols.reduce((acc, symbol)=> {
                return acc.split(symbol).join('')
            }, element)
        })
    }
}

function joinElements (array){
    return array.join(' ')
}

function splitTextBy(symbol){
    return function(text){
        return text.split(symbol)
    }
}


function groupWords(words){
    return Object.values(words.reduce((group, word) => {
        const element = word.toLowerCase()
        const qnt = group[element] ? group[element].quantidade + 1 : 1 
        group[element] = {
            elemento: element, 
            quantidade: qnt  
        }
        return group
    }, {}))
}

function sortByAtributteNumber(atributte, order='asc'){
    return function(array){
        const desc = (object1, object2) => object2[atributte] - object1[atributte]
        const asc = (object1, object2) => object1[atributte] - object2[atributte]
        return [...array].sort(order === 'asc'? asc: desc)
    }
}
module.exports = { 
    readDir, 
    elementsEndWith,
    readFile, 
    readFiles, 
    removeElementsIfEmpty,
    removeElementsIfInclude,
    removeElementsIfOnlyNumber,
    removeSymbols,
    joinElements,
    splitTextBy,
    groupWords,
    sortByAtributteNumber
}