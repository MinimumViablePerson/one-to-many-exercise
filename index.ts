import express from 'express'
import Database from 'better-sqlite3'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const db = new Database('./data.db', {
  verbose: console.log
})

app.get('/albums', (req, res) => {})

app.get('/albums/:id', (req, res) => {})

app.get('/artists', (req, res) => {})

app.get('/artists/:id', (req, res) => {})

app.listen(4000, () => console.log(`Listening on: http://localhost:4000`))
