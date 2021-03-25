const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: { type: String },
  lastname: { type: String },
  email: { type: String },
  age: { type: Number }
});

module.exports = mongoose.model('Users', UserSchema);