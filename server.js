import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './db/dbConfig.js'
import userRoutes from './route/user.route.js'

dotenv.config()

dbConnect();

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.use('/api/users', userRoutes)

// app.get('/', (req, res)=> {
//     res.send("Hello World")
// })

app.listen(PORT, ()=> {
    console.log(`Server is listening on the ${PORT}`)
})
