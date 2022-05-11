const { application } = require('express')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    console.log('Here')
    res.render('index', { text: 'Thanks for stopping by!'})
})


const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(port)






