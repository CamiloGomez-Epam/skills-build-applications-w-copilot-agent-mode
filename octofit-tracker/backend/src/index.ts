import express from 'express'
import db from './config/database'

const app = express()
const PORT = Number(process.env.PORT) || 8000

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`)
})
