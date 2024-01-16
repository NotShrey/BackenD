require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/count', (req,res) =>{
    res.send('<h1>login in here please</h1>')
})

app.get('/youtube',(req,res) =>{
    res.send('<h1>this is youtube</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})