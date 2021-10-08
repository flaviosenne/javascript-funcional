Number.prototype.log = function() { console.log(+this)} 
Function.prototype.log = function() { console.log(this.toString())} 

let r = 3

const I = a => a

r = I(3)

r = I(I)
r.log()

const SELF = f => f(f)

r = SELF(I)
r.log()

const PRIMEIRO = a => _ => a
r = PRIMEIRO(7)(11)
r.log()

const ULTIMO = _ => b => b

r = ULTIMO(7)(11)
r.log()

// flip
const TROCA = f => a => b => f(b)(a)

r = TROCA(ULTIMO)(7)(11)
r.log()

r = TROCA(PRIMEIRO)(6)(12)
r.log()

const ULTIMO2 = a => b => TROCA(PRIMEIRO)(a)(b)

r = ULTIMO2(13)(20)
r.log()

// boolean TRUE e FALSE
// EXPRESSAO ? PRIMEIRO : ULTIMO
// TRUE ? <PRIMEIRO> : ULTIMO
// FALSE ? PRIMEIRO : <ULTIMO>

const T = PRIMEIRO
const F = ULTIMO

T.toString = () => 'Verdadeiro (PRIMEIRO)'
F.toString = () => 'False (ULTIMO)'

T
F

// NOT 
console.log('--------- NOT-------------')
const NOT = a => a(F)(T)

r = NOT(T)
r.log()

r = NOT(F)
r.log()

// AND
// true && false => false
// true && true => true
// false && true => false
// false && false => false

console.log('---------AND-------------')
const AND = a => b => a(b)(F)

r = AND(T)(T)
r.log()

r = AND(T)(F)
r.log()

r = AND(F)(F)
r.log()

r = AND(F)(T)
r.log()


console.log('---------OR-------------')
const OR = a => b => a(T)(b)

r = OR(T)(F)
r.log()

r = OR(T)(T)
r.log()

r = OR(F)(F)
r.log()

r = OR(F)(T)
r.log()


console.log('---------EQ-------------')
const EQ = a => b => a(b)(NOT(b))

r = EQ(T)(T)
r.log()

r = EQ(F)(F)
r.log()

r = EQ(T)(F)
r.log()

r = EQ(F)(T)
r.log()


console.log('---------XOR-------------')
const XOR = a => b => NOT(EQ(a)(b))

r = XOR(T)(T)
r.log()

r = XOR(F)(F)
r.log()

r = XOR(T)(F)
r.log()

r = XOR(F)(T)
r.log()