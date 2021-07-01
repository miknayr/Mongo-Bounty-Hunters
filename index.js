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


// GET /bounties -- READ all drinks from the db
app.get('/bounties', async (req, res) => {
  try {
    const bounty = await db.Hunter.find({})
    res.json({bounty})
  } catch(err) {
    console.log(err)
  }
})


// POST /bounties -- CREATE one hunter redirect to /bounties
app.post('/bounties', (req, res) => {
  db.Hunter.create({
    name: req.body.name,
    wantedFor: req.body.wantedFor,
    client: req.body.client,
    reward: req.body.reward,
    ship: req.body.ship,
    hunters: req.body.hunters,
    captured: req.body.captured,
  })
  .then (() => {
    res.redirect('/bounties')
  })
  .catch (err=> console.log(err))

})




// PUT /bounties/:id -- UPDATE one bounty and redirect to /bounties

app.put('/bounties/:id', (req, res) => {
  db.Hunter.findById(req.params.id)
  .then(foundBounty => {
    foundBounty.name = req.body.name
    foundBounty.wantedFor = req.body.rating
    foundBounty.client = req.body.client
    foundBounty.reward = req.body.reward
    foundBounty.ship = req.body.ship
    foundBounty.hunters = req.body.hunters
    foundBounty.captured = req.body.captured

    foundBounty.save()
    .then(() => {
      res.redirect('/bounties')
    })
    .catch ((err) => console.log(err))
  })
  .catch ((err) => console.log(err))
})

// DELETE /drinks/:id -- DESTROY one drink and redirect to /drinks

app.delete('/bounties/:id', (req, res) => {
  db.Hunter.findByIdAndDelete(req.params.id)
  .then(deletedBounty => {
    console.log(deletedBounty)
    res.redirect('/bounties')
  }).catch((err)=> console.log(err))
})



app.listen(PORT, () => console.log(`welcome to cantina ${PORT}`))