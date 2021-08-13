// somar(3)(4)(5)

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn) 

function base(a =0){
    return function (b = 0){
        return function(funcao){
            return funcao(a, b)
        }
    }
}
function subtrair(a, b){
    return a - b
}
function multiplicar(a, b){
    return a * b
}

const result = base(4)(5)(subtrair)

console.log(result)