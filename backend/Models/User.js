const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 firstname: {
        type: String,
        required: true,
        trim: true,
      },
  lastname: {
        type: String,
        required: true,
        trim: true,
      },
  age: {
    type: Number,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  role: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
}
);

module.exports= mongoose.model('User', userSchema);
