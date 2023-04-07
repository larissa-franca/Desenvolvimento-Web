let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
   //Uma promessa de algo que vai ser executado no futuro, e um dado que vai ser devolvido no futuro
   })
   //para conseguir gerar esse dado, é necessário passar uma função para a promise
   //a função passada para a promise vai ser chamada quando se quiser cumprir a promessa...
    
   p.then(function(valor){ //O then também recebe uma função como parâmetro
       console.log(valor) //O valor passado para a função do then é aquele que foi cumprido pela função da promise,  
   }) //Também usa o conceito de callback, pois passa uma função como parâmetro e essa função é chamda quando a promessa é cumprida