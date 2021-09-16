const pessoa = {
    nome: 'Joao',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Rua feliz'
    }
}

// atribuição por referencia
const outraPessoa = pessoa


// passagem por referencia
function alteraPessoa(pessoa){
    const novaPessoa = {... pessoa}
    novaPessoa.nome = 'Maria'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC' // vai alterar o primeiro objeto também, pois o clo e ...obj é feita apenas no primeiro niível
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)

console.log(pessoa)
console.log(novaPessoa)
console.log(outraPessoa)

let a = 3
let b = a // atribuição por valor, pois como o consumo de memória é baijo, 
//entende-se que deve fazer uma cópia, ou seja, não compartilha o mesmo local de memória

a++
b--

console.log(a)
console.log(b)