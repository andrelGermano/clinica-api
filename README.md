# Clínica API

Uma API RESTful para gerenciamento de uma clínica médica, com funcionalidades para cadastrar, listar, atualizar e remover **pacientes**, **médicos** e **consultas**. O sistema foi desenvolvido em **Node.js** com **Express**, utilizando uma estrutura modular para facilitar manutenção e escalabilidade.

---

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **Express.js** – Framework web para criação da API  
- **MongoDB** (supondo que esteja sendo usado como banco de dados)  
- **Mongoose** – ODM para modelar os dados com MongoDB  
- **dotenv** – Gerenciamento de variáveis de ambiente  
- **nodemon** – Atualização automática durante o desenvolvimento  

---

## Como clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/andrelGermano/clinica-api.git
cd clinica-api
```

---

## Como instalar as dependências

Com o Node.js instalado, execute:

```bash
npm install
```

Isso irá instalar todas as dependências listadas no `package.json`.

---

## Como configurar o ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (exemplo):

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/clinica
```

Certifique-se de substituir o valor de `DATABASE_URL` com a URL real do seu banco de dados.

---

## ▶Como executar o projeto localmente

Para rodar a API em modo de desenvolvimento com `nodemon`:

```bash
npm run dev
```

Ou para rodar normalmente:

```bash
npm start
```

A aplicação será iniciada e estará disponível em:  
**http://localhost:3000**

---

## Estrutura do Projeto

```
clinica-api/
├── controllers/       # Lógica dos endpoints da API
├── models/            # Definição dos modelos de dados
├── routes/            # Rotas organizadas por entidade
├── .env               # Variáveis de ambiente
├── server.js          # Arquivo principal de inicialização do servidor
├── package.json       # Lista de dependências e scripts
```

---

## Exemplos de Endpoints

- `GET /pacientes` – Lista todos os pacientes  
- `POST /medicos` – Cadastra um novo médico  
- `PUT /consultas/:id` – Atualiza uma consulta existente  
- `DELETE /pacientes/:id` – Remove um paciente  

---

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo, modificá-lo e distribuí-lo.
