function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        try{
            conso.log('temp')
            if(Math.random() < chanceErro){
                reject("Ocorreu um erro")
            }
            else{
                resolve(valor)
            }
        }catch(err){
            reject(err)
        }
    })
}

funcionarOuNao('Testando...',0.5)
.then(v => 'Deu certo: '+v)
.then(v => consol.log('Deu certo: ',v), 
err => console.log('Erro especifico: ', err)
)
.catch(err => console.log('Erro: ', err))
.then(()=> console.log('Fim!'))