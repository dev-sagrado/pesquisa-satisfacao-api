const express = require('express');
const router = express.Router();
const formularioController = require('../controllers/formulario.controller');

// Route to create a new Formulario
router.post('/', formularioController.criarFormulario);

// Route to get all Formularios
router.get('/', formularioController.getFormularios);

// Route to get a specific Formulario by ID
router.get('/:id', formularioController.getFormularioById);

// Route to add a Pergunta (question) to a Formulario
router.post('/:id/perguntas', formularioController.adicionarPergunta);

// Route to remove a Pergunta from a Formulario
router.delete('/perguntas/:id', formularioController.removerPergunta);

module.exports = router;
