require('dotenv').config()
require('express-async-errors') //this will handle the async errors thing

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('<h1>hello</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3500

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)

        app.listen(port, console.log(`server is listening to port ${port}`))
    } catch(error){

    }
}

start()