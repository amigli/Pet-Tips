require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// instance of app
const app = express()

// import routes
const dogRoutes = require('./routes/dog')
const catRoutes = require('./routes/cat')
const userRoutes = require('./routes/user')
const dogOperationsRoutes = require('./routes/dogOperations')
const catOperationsRoutes = require('./routes/catOperations')

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connect to DB & listening on port " + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// use req.body
app.use(express.json())

// middleware used to log the request method and request path
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoutes)
app.use('/api/dogOperations',dogOperationsRoutes)
app.use('/api/catOperations',catOperationsRoutes)
app.use('/api/dogs', dogRoutes)
app.use('/api/cats', catRoutes)