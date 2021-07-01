// require the mongoose package
const mongoose = require('mongoose')
// define a mongoose schema
const HunterSchema = new mongoose.Schema({
  name: {
    type: String
  },
  wantedFor: {
    type: String
  },
  client: {
    type: String
  },
  reward: {
    type: Number
  },
  ship: {
    type: String
  },
  hunters: [{
    type: String
  }],
  captured: {
    type: Boolean
  }
    
}, {
  timestamps: true

})
// build a model from the schema or export the schema and build the model in our index.js

module.exports = HunterSchema

