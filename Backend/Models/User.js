const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email:{ type: String, required: true, unique: true },
  roll: { type: String, unique: true },
  verified: { type: Boolean, default: false }, 
  otp: String,
  password: String, 
  role: {
    type: String, // 'student' or 'admin', for example
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;