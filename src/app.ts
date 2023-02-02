import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { router } from './routes'
import { dbConnect } from './config/mongo'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

dbConnect()

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`))
