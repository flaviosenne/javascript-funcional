function textoComTamanhoEntre(min){
    return function(max){

        return function(erro){

            return function(texto){
                // lazzy evaluation
                const tamanho = (texto || '').trim().length
            
                if(tamanho < min || tamanho > max){
                    throw erro
                }
            }
        }
    }
}

function aplicatValidacao(fn){
    return function(valor){
        // lazy evaluation
        try{
            fn(valor)
        }catch(e){
            return { error: e}
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')
const validarNomeProducto = aplicatValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'A', preco: 14.99, desc: 0.25}
const p2 = { nome: 'AB', preco: 14.99, desc: 0.25}

console.log(validarNomeProducto(p1.nome))
console.log(validarNomeProducto(p2.nome))