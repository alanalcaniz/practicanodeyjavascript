// .js --> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

var n1=5
var n2=7

import { sum, rest, mul } from './sum.mjs'

console.log(sum(n1,n2))
console.log(rest(n1,n2))
console.log(mul(n1,n2))