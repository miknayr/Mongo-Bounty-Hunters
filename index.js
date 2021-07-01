const express = require('express')

const db = require('./models')
db.connect()

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: false }))


// test index route / -- return a server message
app.get('/', (req, res) => {
  res.json({ msg: 'hello bounty hunter! pick your target 🍻 '})
})


app.listen(PORT, () => console.log(`welcome to cantina ${PORT}`))