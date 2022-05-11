const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

// Render is done top-to-bottom, so placement is key.
// If you have middleware (eg logger) to use everywhere,
// Define it at the top.
// app.use(logger) 


// If you have middleware you only want to run at individual
// routes/endpoints, you can indclude it is an argument
app.get('/', logger, (req, res) => {
    // console.log('Here')
    res.render('index', { text: 'Thanks for stopping by!'})
})


const userRouter = require('./routes/users')

app.use('/users', userRouter)


// Every piece of middleware takes a req, res, next
function logger(req, res, next) {
    console.log("Log: " + req.originalUrl)
    next()
}

app.listen(port)






