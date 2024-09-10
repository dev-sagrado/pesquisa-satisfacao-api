const respostaService = require('../services/resposta.service');

// Controller to register a response for a Pergunta
exports.registrarResposta = async (req, res) => {
  const { alunoId, perguntaId, resposta } = req.body;
  try {
    const novaResposta = await respostaService.registrarResposta(alunoId, perguntaId, resposta);
    res.status(201).json(novaResposta);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register resposta' });
  }
};

// Controller to get all responses for a specific Formulario
exports.getRespostasByFormulario = async (req, res) => {
  const { id } = req.params;
  try {
    const respostas = await respostaService.getRespostasByFormulario(id);
    res.status(200).json(respostas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get respostas' });
  }
};
