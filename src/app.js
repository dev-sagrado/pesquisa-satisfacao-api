const express = require('express'); 
const app = express(); 
 
const formularioController = require('./controllers/formulario.controller'); 
const respostaController = require('./controllers/resposta.controller'); 
 
app.use(express.json()); 
 
app.use('/api', formularioController); 
app.use('/api', respostaController); 
 
module.exports = app; 
