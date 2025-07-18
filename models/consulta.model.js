const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
  medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico' },
  data: Date,
  descricao: String
});

module.exports = mongoose.model('Consulta', consultaSchema);
