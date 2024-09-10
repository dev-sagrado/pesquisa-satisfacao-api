const express = require('express');
const app = express();

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

// Importar as rotas
const formularioRoutes = require('./routes/formulario.routes');
const respostaRoutes = require('./routes/resposta.routes');

// Usar as rotas no middleware (sem '/formularios' e '/respostas' aqui)
app.use('/api', formularioRoutes);
app.use('/api', respostaRoutes);

module.exports = app;
