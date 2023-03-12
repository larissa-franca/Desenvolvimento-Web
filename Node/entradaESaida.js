const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!node entradaESaida.js -a\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const os = require('os');
        const texto = `Olá${os.EOL}meu nome é${os.EOL}Fulano!`
        console.log(texto)


        //process.stdout.write(` Fala ${nome} !!\n`)
        process.exit()
    })
}