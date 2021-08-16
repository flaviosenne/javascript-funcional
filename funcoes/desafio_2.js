const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99,fragil :true},
    {nome: 'Impressora', qtde: 1, preco: 649.50,fragil :true},
    {nome: 'Caderno', qtde: 4, preco: 27.10,fragil :false},
    {nome: 'Lapis', qtde: 3, preco: 5.82,fragil :false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20,fragil :true},
]

// 1. elementos fragil true
// 2. qtde * preco
// 3. media valores

const fragil = item => item.fragil

const preco = item => item.qtde * item.preco

const acumulador = (inicial, item) => inicial + item

const itens = carrinho.filter(fragil).map(preco)

const resultado = itens.reduce(acumulador)

console.log(resultado / itens.length)

// resposta

const media = carrinho
.filter(item => item.fragil)
.map(item => item.qtde * item.preco)
.reduce((acumulador, elemento)=> {
    const novaQtde =acumulador.qtde + 1
    const novoTotal =acumulador.total + elemento
    return {
        qtde: novaQtde, 
        total: novoTotal, 
        media: novoTotal / novaQtde
    }
}, {qtde: 0, total: 0, media: 0})


console.log(media)