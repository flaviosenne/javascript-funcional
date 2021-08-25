const PI = 3.14

// impura - PI é uma valor externo!
function areaCirc(raio){
    return raio * raio * PI
}

console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))

// pura
function areaCircPura(raio, pi){
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))