//console.log(typeof Promise) //promise é uma function
let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

console.log(typeof p)