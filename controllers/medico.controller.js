const Medico = require('../models/medico.model');

exports.create = async (req, res) => {
  const medico = await Medico.create(req.body);
  res.json(medico);
};

exports.findAll = async (req, res) => {
  const medicos = await Medico.find();
  res.json(medicos);
};

exports.findOne = async (req, res) => {
  const medico = await Medico.findById(req.params.id);
  res.json(medico);
};

exports.update = async (req, res) => {
  const medico = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(medico);
};

exports.remove = async (req, res) => {
  await Medico.findByIdAndDelete(req.params.id);
  res.json({ message: 'Médico removido' });
};
