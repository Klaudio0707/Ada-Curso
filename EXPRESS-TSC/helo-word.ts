import express from 'express';
import {config} from 'dotenv'
import path from 'path'
import {readFileSync} from 'fs'

config()
const app = express();
app.use('/client', express.static( path.join(__dirname, 'public'),{}))
const url =  process.env.API_BASE_URL ?? 'http://localhost'; 
const port = process.env.PORT ?? 3000;
const users = [
{
name: 'Cláudio',
age: 29
},
{
name: "Bruna Alves",
age: 25
}

]

app.get('/', (req, res) => {
//     const homePagePath = path.join(__dirname, 'home.html')
// const homePage = readFileSync(homePagePath)
//     return res.status(200).send(homePage)
});
app.get('/api/users', (req, res) => {
return res.send(users)


})
app.listen(port, () => {
  console.log(`Server running on ${url}:${port}`);
});
