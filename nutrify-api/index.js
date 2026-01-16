
const express = require('express')
const app = express()
require('dotenv').config()

const connectDB = require('./config/db')

app.use(express.json())

// Routes
const authRoutes = require('./routes/authRoutes')
const foodRoutes = require('./routes/foodRoutes')
const trackingRoutes = require('./routes/trackingRoutes')

// DB Connection
connectDB()

app.use('/', authRoutes)
app.use('/', foodRoutes)
app.use('/', trackingRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is up and running")
})
