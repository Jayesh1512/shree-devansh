import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 15
  },
  lastName: {
    type: String,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phoneNo: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Contact', contactSchema);
