const mongoose = require ('mongoose')

require('dotenv').config()

const connect = () => {
  const uri = process.env.ATLAS_URI
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  const db = mongoose.connection
  db.once('open', () => {
    console.log(`⛓ mongoDB connection⛓ : ${db.host}:${db.port}`)
  })
  
  db.on('error', err =>{
    console.log(`🔥error🔥\n ${err}`)
  })
}

module.exports = {
  connect,
  Hunter: mongoose.model('Hunters', require('./Hunters.js'))

}