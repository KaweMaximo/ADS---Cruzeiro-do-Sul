const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('GET /')
    console.log('Headers:')
    console.log(req.headers['connection'])
    res.header('location', 'https://outlook.live.com/mail/0/inbox')
    res.status(307).send()
})

app.post('/clientes', (req, res) => {
    console.log('POST /clientes', req.body)
    console.log("tem email? ", !req.body['email'])
    if(!req.body['email']){
        res.status(400).send("O email é obrigatório.")
    } else {
        res.send('OK')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})