
# Pesquisa Satisfação API

### Descrição

Este é um projeto Node.js utilizando Prisma ORM, Express e MySQL. Ele gerencia formulários, perguntas e respostas. O Prisma é usado para conectar-se ao banco de dados MySQL e fornecer migrações e gerenciamento de dados, enquanto o Express lida com as requisições HTTP.

## Índice

1. [Requisitos](#requisitos)
2. [Instalação](#instalação)
3. [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
4. [Comandos Úteis](#comandos-úteis)
5. [Executando o Projeto](#executando-o-projeto)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Ferramentas e Tecnologias](#ferramentas-e-tecnologias)

---

## Requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

- **Node.js** (versão >= 12.x)
- **MySQL** (versão >= 5.7)
- **NPM** (versão >= 6.x)
- **Prisma CLI** (instalado globalmente)

---

## Instalação

Siga estas etapas para configurar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone https://github.com/dev-sagrado/pesquisa-satisfacao-api.git
    cd pesquisa-satisfacao-api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

---

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL. Por exemplo, no terminal MySQL:

    ```sql
    CREATE DATABASE pesquisa_satisfacao;
    ```

2. Renomeie o arquivo `.env.example` para `.env`:

    ```bash
    mv .env.example .env
    ```

3. Abra o arquivo `.env` e configure sua variável de ambiente `DATABASE_URL`:

    ```bash
    DATABASE_URL="mysql://user:password@localhost:3306/pesquisa_satisfacao"
    ```

   - Substitua `user` pelo seu usuário MySQL.
   - Substitua `password` pela sua senha MySQL.
   - Substitua `pesquisa_satisfacao` pelo nome do banco de dados que você criou.

4. Gere as migrações e aplique-as ao banco de dados:

    ```bash
    npx prisma migrate dev --name init
    ```

---

## Comandos Úteis

Aqui estão alguns comandos importantes que você pode usar no projeto:

- **Iniciar o servidor de desenvolvimento**:

    ```bash
    npm run dev
    ```

    Inicia o servidor com **nodemon** e monitora mudanças nos arquivos.

- **Iniciar o servidor em produção**:

    ```bash
    npm start
    ```

    Inicia o servidor sem monitoração automática de mudanças.

- **Gerar o cliente Prisma**:

    ```bash
    npm run prisma:generate
    ```

    Gera o cliente Prisma com base no schema.

- **Criar uma nova migração**:

    ```bash
    npm run prisma:migrate
    ```

    Cria uma nova migração e aplica as mudanças no banco de dados.

- **Rodar Prisma Studio**:

    ```bash
    npm run prisma:studio
    ```

    Abre a interface gráfica Prisma Studio para visualização e manipulação de dados.

- **Rodar ESLint**:

    ```bash
    npm run lint
    ```

    Analisa o código para garantir que segue as boas práticas.

- **Formatar o código com Prettier**:

    ```bash
    npm run format
    ```

    Aplica formatação ao código de acordo com as regras definidas no Prettier.

- **Verificar vulnerabilidades**:

    ```bash
    npm audit
    ```

- **Corrigir vulnerabilidades**:

    ```bash
    npm audit fix
    ```

- **Limpar cache do npm**:

    ```bash
    npm run clean
    ```

---

## Executando o Projeto

1. Após seguir os passos de configuração, você pode iniciar o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

2. O projeto estará rodando no endereço: [http://localhost:3000](http://localhost:3000)

3. Agora você pode testar as rotas da API usando o **Postman**, **Insomnia**, ou diretamente no navegador para rotas GET.

---

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
pesquisa-satisfacao-api/
├── prisma/
│   ├── migrations/        # Diretório criado automaticamente pelo Prisma para migrações
│   └── schema.prisma      # Definições do schema do banco de dados (modelos, enums, etc.)
├── src/
│   ├── controllers/       # Controladores que lidam com as requisições HTTP
│   │   ├── formulario.controller.js
│   │   └── resposta.controller.js
│   ├── routes/            # Arquivos de rotas da API
│   │   ├── formulario.routes.js
│   │   └── resposta.routes.js
│   ├── services/          # Lógica de negócios para formulários e respostas
│   │   ├── formulario.service.js
│   │   └── resposta.service.js
│   ├── app.js             # Configuração principal do Express
│   └── server.js          # Ponto de entrada para o servidor
├── .env                   # Variáveis de ambiente (conexão ao banco de dados, etc.)
├── .gitignore              # Arquivos/pastas a serem ignorados pelo Git
├── package.json            # Metadados do projeto e dependências
└── README.md               # Documentação do projeto
```

---

## Ferramentas e Tecnologias

Este projeto utiliza as seguintes ferramentas e tecnologias:

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework para criar servidores HTTP
- **Prisma**: ORM moderno para Node.js
- **MySQL**: Banco de dados relacional
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente em desenvolvimento
- **ESLint**: Ferramenta para garantir boas práticas de código
- **Prettier**: Ferramenta para formatação automática de código
- **Dotenv**: Gerenciamento de variáveis de ambiente

---

## Autores

**Lucas Vieira, João Érik, Arthur Marques**

Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato.

---

## Licença

Este projeto é distribuído sob a licença **MIT**. Veja mais detalhes no arquivo [LICENSE](LICENSE).
