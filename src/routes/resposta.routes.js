const express = require('express');
const router = express.Router();
const respostaController = require('../controllers/resposta.controller');

// Route to register a response for a Pergunta
router.post('/', respostaController.registrarResposta);

// Route to get all responses for a specific Formulario
router.get('/formularios/:id/respostas', respostaController.getRespostasByFormulario);

module.exports = router;
