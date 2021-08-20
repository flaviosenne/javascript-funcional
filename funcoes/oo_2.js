class Produto {
    constructor(nome, preco, desconto = 0.5){
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    get nome(){
        return `Produto: ${this._nome}` 
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    get precoFinal(){
        return this.preco * (1 - this.desconto)
    }

    get preco(){
        return this._preco
    }
    
    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }
}

const p1 = new Produto('Caneta', 8.59)
p1.nome= 'caneta'
console.log(p1.nome)
const p2 = new Produto('Geladeira',10000, 0.8)
console.log(p2)
console.log(p2.precoFinal)