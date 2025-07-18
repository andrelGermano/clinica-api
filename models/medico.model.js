const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  nome: String,
  especialidade: String,
  crm: String
});

module.exports = mongoose.model('Medico', medicoSchema);
