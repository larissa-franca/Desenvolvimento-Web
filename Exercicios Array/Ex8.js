function mult(a, b) {
  let resultado = 0
   for (let i = 0; i < a; i++) {
    resultado = resultado + b
   }
   return resultado
}
console.log(mult(2, 4))
console.log(mult(2, 3))