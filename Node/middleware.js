//Processo A
//Passo A ----> passo B ----> passo C

//chain of responsability
//possui dados de entrada, com sequencia de passo, não tem acoplamento dos proximos passos.
//Os passos são independentes

//Meddleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx)