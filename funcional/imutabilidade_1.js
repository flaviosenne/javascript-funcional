
function ordenar(array){
    return [...array].sort((a,b)=> a-b)
}

const nums = Object.freeze([3,1,7,9,4,6])
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)

const partNums = nums.slice(2)

console.log(partNums, nums)