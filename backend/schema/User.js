const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  Businessname:{type: String},
  registrationNumber:{type: String},
  name:{type: String, required: true},
  email:{type: String, required: true},
  phone:{type: String, required: true},
  investedAmount:{type: Number, default: 0},
  password:{type: String,  required: true},
  Balance:{type: Number, default: 0},
  isBusiness:{type:Boolean, default:false}
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      } catch (error) {
        next(error);
      }
    }
    next();
  });

module.exports = mongoose.model('User', userSchema);