require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// instance of app
const app = express()

// import routes
const dogRoutes = require('./routes/dog')
const catRoutes = require('./routes/cat')
const userRoutes = require('./routes/user')

// connect to DB
mongoose.connect(process.env.MONGO_URI) // return a promise
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connect to DB & listening on port 4001")
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.json())

// middleware used to log the request method and request path
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoutes)
app.use('/api/dogs', dogRoutes)
app.use('/api/cats', catRoutes)