// functors são objetos que implementam a função MAP
// que também é im "wrapper" de valor

// ARRAY é um excemplo de FUNCTORS
const nums = [ 1,2,3,4,5,6]

const novosNums = nums
.map(el => el+10)
.map(el => el * 2)

console.log(nums, novosNums)

function TipoSeguro(valor){
    return {
        valor,  
        invalid(){
            return this.valor === null || this.valor === undefined
        },
        map(fn){
            if(this.invalid()){
                return TipoSeguro(null)
            }else{
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        },
        flatMap(fn){
            return this.map(fn).valor
        }
    }
}
const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
.map(t => t.toUpperCase())
.map(t => `${t}!!!`)
.map(t => t.split('').join(' '))


console.log(original, alterado.valor)