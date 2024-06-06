require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// instance of app
const app = express()

// import routes
const dogRoutes = require('./routes/dog')
const catRoutes = require('./routes/cat')

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

app.use('/api/dogs', dogRoutes)
app.use('/api/cats', catRoutes)
app.use(express.json())