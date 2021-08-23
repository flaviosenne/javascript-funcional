const fs = require('fs')
const { join }= require('path')

function readDir(path){
    return new Promise((resolve, reject)=> {

        try{
            let files = fs.readdirSync(path)
            files = files.map(file => join(path, file))
            resolve(files)
        }catch(e){
            reject(e)
        }

    })
}

function readFile(path){
    return new Promise((resolve, reject) =>{
        try{
            const content = fs.readFileSync(path, { encoding: 'utf-8'})

            resolve(content.toString())
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

module.exports = { 
    readDir, 
    elementsEndWith,
    readFile, 
    readFiles, 
    removeElementsIfEmpty,
    removeElementsIfInclude,
    removeElementsIfOnlyNumber
}