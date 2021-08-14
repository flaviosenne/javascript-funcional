exec = (fn, a, b) => fn(a,b)

function somarNoTerminal(a, b){
    console.log(a + b)
}
function subtrairNoTerminal(a, b){
    console.log(a - b)
}
function subtrair(a, b){
    return a - b
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const result = exec(subtrair, 50, 25)

console.log(result)

const callback = () => console.log('Exec...')
setInterval(callback, 1000)