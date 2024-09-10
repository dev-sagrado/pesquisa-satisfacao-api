const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Service to register a response from a student
async function registrarResposta(alunoId, perguntaId, respostaTexto) {
  const resposta = await prisma.resposta.create({
    data: {
      resposta: respostaTexto,
      aluno: {
        connect: { id: parseInt(alunoId) },
      },
      pergunta: {
        connect: { id: parseInt(perguntaId) },
      },
    },
  });
  return resposta;
}

// Service to get all responses by a Formulario ID
async function getRespostasByFormulario(formularioId) {
  const respostas = await prisma.resposta.findMany({
    where: {
      pergunta: {
        formularioId: parseInt(formularioId),
      },
    },
    include: {
      pergunta: true,
      aluno: true,
    },
  });
  return respostas;
}

module.exports = {
  registrarResposta,
  getRespostasByFormulario,
};
