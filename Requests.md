
# Documentação de Endpoints da API

Esta documentação descreve todos os endpoints disponíveis na API de Pesquisa de Satisfação, divididos por classe (Formulários e Respostas), com exemplos de requisições para cada endpoint.

---

## Índice
1. [Formulários (Formularios)](#formulários-formularios)
    - [Criar um novo formulário](#criar-um-novo-formulário)
    - [Obter todos os formulários](#obter-todos-os-formulários)
    - [Obter um formulário específico](#obter-um-formulário-específico)
    - [Adicionar uma pergunta a um formulário](#adicionar-uma-pergunta-a-um-formulário)
    - [Remover uma pergunta de um formulário](#remover-uma-pergunta-de-um-formulário)
2. [Respostas (Respostas)](#respostas-respostas)
    - [Registrar uma resposta para uma pergunta](#registrar-uma-resposta-para-uma-pergunta)
    - [Obter todas as respostas de um formulário](#obter-todas-as-respostas-de-um-formulário)

---

## Formulários (Formularios)

### Criar um novo formulário

- **Endpoint**: `POST /api/formularios`
- **Descrição**: Cria um novo formulário com perguntas associadas.
- **Exemplo de Requisição**:

```bash
curl -X POST http://localhost:3000/api/formularios -H "Content-Type: application/json" -d '{
    "titulo": "Pesquisa de Satisfação",
    "perguntas": [
      {
        "tipo": "MULTIPLA_ESCOLHA",
        "texto": "Qual a sua opinião sobre o serviço?",
        "opcoes": ["Ótimo", "Bom", "Regular", "Ruim"]
      }
    ]
}'
```

---

### Obter todos os formulários

- **Endpoint**: `GET /api/formularios`
- **Descrição**: Retorna todos os formulários disponíveis.
- **Exemplo de Requisição**:

```bash
curl -X GET http://localhost:3000/api/formularios
```

---

### Obter um formulário específico

- **Endpoint**: `GET /api/formularios/:id`
- **Descrição**: Retorna um formulário específico pelo seu ID.
- **Exemplo de Requisição**:

```bash
curl -X GET http://localhost:3000/api/formularios/1
```

---

### Adicionar uma pergunta a um formulário

- **Endpoint**: `POST /api/formularios/:id/perguntas`
- **Descrição**: Adiciona uma nova pergunta a um formulário existente.
- **Exemplo de Requisição**:

```bash
curl -X POST http://localhost:3000/api/formularios/1/perguntas -H "Content-Type: application/json" -d '{
    "tipo": "DISCURSIVA",
    "texto": "Por favor, descreva sua experiência.",
    "opcoes": []
}'
```

---

### Remover uma pergunta de um formulário

- **Endpoint**: `DELETE /api/perguntas/:id`
- **Descrição**: Remove uma pergunta de um formulário pelo seu ID.
- **Exemplo de Requisição**:

```bash
curl -X DELETE http://localhost:3000/api/perguntas/1
```

---

## Respostas (Respostas)

### Registrar uma resposta para uma pergunta

- **Endpoint**: `POST /api/respostas`
- **Descrição**: Registra uma nova resposta para uma pergunta de um formulário.
- **Exemplo de Requisição**:

```bash
curl -X POST http://localhost:3000/api/respostas -H "Content-Type: application/json" -d '{
    "alunoId": 1,
    "perguntaId": 1,
    "resposta": "Ótimo"
}'
```

---

### Obter todas as respostas de um formulário

- **Endpoint**: `GET /api/formularios/:id/respostas`
- **Descrição**: Retorna todas as respostas de um formulário específico.
- **Exemplo de Requisição**:

```bash
curl -X GET http://localhost:3000/api/formularios/1/respostas
```

---

Isso conclui a documentação dos endpoints da API. Utilize o **Postman**, **Insomnia** ou o **cURL** para testar as requisições.
