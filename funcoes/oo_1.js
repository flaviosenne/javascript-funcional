function Produto(nome, preco, desconto = 0.5){
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function(){
        return this.preco * (1 - this.desconto)
    }
    
    let privado = 3
}

const p1 = new Produto('Caneta', 8.59)
console.log(p1)
const p2 = new Produto('Geladeira',3000)
console.log(p2)
console.log(p2.precoFinal())