const path = require('node:path')
const fs = require('node:fs');
const dotenv = require('dotenv')
dotenv.config()

const filePath = path.join(process.cwd(),  'texto.txt')
const fileOutPath = path.join(process.cwd(),  'texto-com-linhas.txt')
console.log(filePath)

console.time("leitura do arquivo")
console.time("manipular arquivos")
fs.readFile(filePath, {}, (erro, dados) => {
if (erro){
    console.log(`Erro do arquivo no caminho ${filePath}`)
return
}

console.timeEnd('leitura do arquivo')

const texto = dados.toString()
const linhas = texto.split('\n')

const linhasAjustadas = linhas.map((Linha, index, arrayDeLinhas) =>
`${index + 1} - ${Linha}`
)

fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
if (erro){
console.log(`Erro na escrita do arquivo${fileOutPath}`)
}
})
console.log(`arquivo salvo no bucket ${process.env.S3_BUCKET} ` )
console.timeEnd("manipular arquivos");
// console.log(dados.toString())
})
