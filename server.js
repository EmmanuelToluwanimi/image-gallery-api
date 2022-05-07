const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')
const imgRouter = require('./route/cloudinary')
const PORT = process.env.PORT || 5000
require('dotenv').config()
connectDB()


app.use(cors())
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))

app.use('/api/images', imgRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))