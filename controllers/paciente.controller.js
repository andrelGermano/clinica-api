const Paciente = require('../models/paciente.model');

exports.create = async (req, res) => {
  const paciente = await Paciente.create(req.body);
  res.json(paciente);
};

exports.findAll = async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
};

exports.findOne = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id);
  res.json(paciente);
};

exports.update = async (req, res) => {
  const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(paciente);
};

exports.remove = async (req, res) => {
  await Paciente.findByIdAndDelete(req.params.id);
  res.json({ message: 'Paciente removido' });
};
