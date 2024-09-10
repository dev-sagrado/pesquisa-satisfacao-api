const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Service to register a response from an anonymous user
async function registrarResposta(perguntaId, respostaTexto) {
  const resposta = await prisma.resposta.create({
    data: {
      resposta: respostaTexto,
      pergunta: {
        connect: { id: parseInt(perguntaId) },
      }
    }
  });
  return resposta;
}

// Service to get all responses by a Formulario ID
async function getRespostasByFormulario(formularioId) {
  const respostas = await prisma.resposta.findMany({
    where: {
      formularioId: parseInt(formularioId)
    },
    include: {
      pergunta: true
    }
  });
  return respostas;
}

module.exports = {
  registrarResposta,
  getRespostasByFormulario
};
