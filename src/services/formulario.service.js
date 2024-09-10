const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Service to create a new Formulario
async function criarFormulario(titulo, perguntas) {
  console.log(perguntas)

  const formulario = await prisma.formulario.create({
    data: {
      titulo: titulo,
      perguntas: {
        create: perguntas.map(pergunta => ({
          tipo: pergunta.tipo,
          texto: pergunta.texto,
        }))
      }
    }
  });
  return formulario;
}

// Service to get all Formularios
async function getFormularios() {
  const formularios = await prisma.formulario.findMany({
    include: { perguntas: true, respostas: true }
  });
  return formularios;
}

// Service to get a specific Formulario by ID
async function getFormularioById(id) {
  const formulario = await prisma.formulario.findUnique({
    where: { id: parseInt(id) },
    include: { perguntas: true, respostas: true }
  });
  return formulario;
}

// Service to add a Pergunta to a Formulario
async function adicionarPergunta(formularioId, pergunta) {
  const formulario = await prisma.formulario.update({
    where: { id: parseInt(formularioId) },
    data: {
      perguntas: {
        create: {
          tipo: pergunta.tipo,
          texto: pergunta.texto,
          opcoes: pergunta.opcoes || []
        }
      }
    }
  });
  return formulario;
}

// Service to remove a Pergunta from a Formulario
async function removerPergunta(perguntaId) {
  await prisma.pergunta.delete({
    where: { id: parseInt(perguntaId) }
  });
}

module.exports = {
  criarFormulario,
  getFormularios,
  getFormularioById,
  adicionarPergunta,
  removerPergunta
};