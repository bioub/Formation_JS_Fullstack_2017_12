const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator(value) {
        return value.indexOf('@') !== 1;
      }
    }
  },
  telephone: String,
});

module.exports = mongoose.model('Contact', contactSchema);
