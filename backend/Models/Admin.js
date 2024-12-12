const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  
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
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType : {
    type : String,
    required : true,
  },
});

module.exports = mongoose.model('Admin', adminSchema);
