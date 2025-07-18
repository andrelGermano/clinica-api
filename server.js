const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const pacienteRoutes = require('./routes/paciente.routes');
const medicoRoutes = require('./routes/medico.routes');
const consultaRoutes = require('./routes/consulta.routes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado com sucesso"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/medicos', medicoRoutes);
app.use('/api/consultas', consultaRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
