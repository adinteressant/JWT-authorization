import express from 'express'
import router from './routes/index.ts'
import * as dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use(cookieParser())
app.use(express.json())

app.listen(PORT,()=>{
  console.log(`server is listening on port ${PORT}`)
})
app.use(router)

