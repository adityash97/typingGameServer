const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    email: {
      type: String,
      required: true,
      index: { unique: true, dropDups: true },
    },
    password: { type: String, required: true },
    score: { type: Number }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;