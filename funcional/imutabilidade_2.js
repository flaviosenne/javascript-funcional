const nums = [4,8,3,2,9,1,9,3]

// 1 imperativo, dados mutáveis
let total = 0

for(let i =0; i < nums.length; i ++){
    total += nums[i]
}

console.log(total)


// 2 declarativo, funcional, imutavel
const somar = (a, b) => a + b
const total2 = nums.reduce(somar)
console.log(total2)


// 3 recursividade
function somarArray(array, total = 0){
    if(array.length == 0){
        return total
    }
    return somarArray(array.slice(1), total+ array[0])
}

const total3 = somarArray(nums)

console.log(total3)