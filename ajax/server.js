const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(express.static('.')) // para qualquer requisição/qualquer URL
app.use(bodyParser.urlencoded({ extended: true })) // passa qualquer dado para 'Objeto'
app.use(bodyParser.json()) // passa qualquer JSON apra 'Objeto'

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        } 

        res.end('concluído com sucesso.')
    })
})  

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

//app.get('/teste', (req, res) => res.send(new Date)) // para quando vier get na requisição '/teste'              // função Middleware
app.listen(8080, () => console.log('Executando...'))
