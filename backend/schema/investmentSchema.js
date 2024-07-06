const mongoose = require('mongoose')
const usersSchema = require('../../schema/usersSchema')


const investmentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", require: true   },
  investmentType:{type: String, require: true},
  Amount:{type: Number, require: true},
  date:{type: Date, default:Date.now},
  status:{type:String, enum: ['active', 'matured', 'closed'], default: 'Active'},
  investmentId:{type: String, }

}); 


const investment = mongoose.model('investment', investmentSchema);

module.exports = investment;