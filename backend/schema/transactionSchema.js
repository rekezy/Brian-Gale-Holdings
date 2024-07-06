const mongoose = require('mongoose') 


const transactionSchema = new mongoose.Schema({
  transactionId: {type:String, required: true, unique: true}
})

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;