const http = require('http')

const server = http.createServer((req, res) =>{ 
const { method, statusCode, url } = req
const esportes = ['soccer', 'volley', 'basketball', 'tennis']

if(url ==='/') {
res.write('<div><h1>Hello from Node</h1> <p>Por que</p> </div>')
res.end()

}
if(url ==='/esportes') {
    res.write(JSON.stringify(esportes))
    res.end()
    }
})

server.listen(3000, 'localhost', () => {
console.log("server running on http://localhost:3000")


})