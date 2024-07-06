const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId,}
});


const admin = mongoose.model('admin', adminSchema);

module.exports = admin;