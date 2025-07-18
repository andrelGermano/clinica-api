const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  dataNascimento: Date
});

module.exports = mongoose.model('Paciente', pacienteSchema);
