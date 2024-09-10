const formularioService = require('../services/formulario.service');

// Controller to create a new Formulario
exports.criarFormulario = async (req, res) => {
  const { titulo, perguntas } = req.body;
  try {
    const formulario = await formularioService.criarFormulario(titulo, perguntas);
    res.status(201).json(formulario);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create formulario' });
  }
};

// Controller to get all Formularios
exports.getFormularios = async (req, res) => {
  try {
    const formularios = await formularioService.getFormularios();
    res.status(200).json(formularios);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get formularios' });
  }
};

// Controller to get a specific Formulario by ID
exports.getFormularioById = async (req, res) => {
  const { id } = req.params;
  try {
    const formulario = await formularioService.getFormularioById(id);
    if (!formulario) {
      res.status(404).json({ error: 'Formulario not found' });
    } else {
      res.status(200).json(formulario);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get formulario' });
  }
};

// Controller to add a Pergunta to a Formulario
exports.adicionarPergunta = async (req, res) => {
  const { id } = req.params;
  const { tipo, texto, opcoes } = req.body;
  try {
    const formulario = await formularioService.adicionarPergunta(id, { tipo, texto, opcoes });
    res.status(200).json(formulario);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add pergunta' });
  }
};

// Controller to remove a Pergunta from a Formulario
exports.removerPergunta = async (req, res) => {
  const { id } = req.params;
  try {
    await formularioService.removerPergunta(id);
    res.status(200).json({ message: 'Pergunta removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove pergunta' });
  }
};
