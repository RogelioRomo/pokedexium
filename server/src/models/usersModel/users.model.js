const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  role: { type: String, default: 'user' }
})

module.exports = model('users', userSchema)
