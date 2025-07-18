const Consulta = require('../models/consulta.model');

exports.create = async (req, res) => {
  const consulta = await Consulta.create(req.body);
  res.json(consulta);
};

exports.findAll = async (req, res) => {
  const consultas = await Consulta.find().populate('paciente').populate('medico');
  res.json(consultas);
};

exports.findOne = async (req, res) => {
  const consulta = await Consulta.findById(req.params.id).populate('paciente').populate('medico');
  res.json(consulta);
};

exports.update = async (req, res) => {
  const consulta = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(consulta);
};

exports.remove = async (req, res) => {
  await Consulta.findByIdAndDelete(req.params.id);
  res.json({ message: 'Consulta removida' });
};
