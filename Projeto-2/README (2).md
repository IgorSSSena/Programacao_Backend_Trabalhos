
# 🔐 Sistema de Login com Express e MongoDB

Projeto backend no formato MVC utilizando **Node.js + Express**, com autenticação de usuário baseada em **cookies e sessões**. O frontend é moderno, inspirado em plataformas como Airbnb, com páginas estilizadas usando HTML, CSS e EJS.

---
## 👥 Colaboração

Este projeto foi desenvolvido em dupla por **Igor Sena** e **Leonardo**, com programação simultânea.  
O repositório foi enviado pelo Igor apenas por fins de organização.

---

## 👩‍🏫 Professora
**Monique Emídio de Oliveira**


## 👨‍💻 Alunos

**Igor Silva Sena. RA:2418274.**  
**Leonardo Kiyoshi Tioda Menezes Rocha. RA:1998498.**
---

## 📁 Estrutura de Pastas

```
express-login-mvc/
│
├── src/
│   ├── config/            # Conexão com o banco MongoDB Atlas
│   ├── controllers/       # Lógica dos controladores
│   ├── middlewares/       # Middleware de proteção de rota
│   ├── models/            # Schema do usuário
│   ├── public/            # Arquivos estáticos (CSS, imagens, etc)
│   ├── routes/            # Rotas do sistema
│   ├── views/             # Páginas HTML com EJS
│   └── app.js             # Arquivo principal do Express
│
├── .env                   # Variáveis de ambiente
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Funcionalidades

- [x] Página de login estilizada
- [x] Página protegida (acesso apenas com login)
- [x] Sessões persistentes com cookies
- [x] Validação de usuário via banco de dados MongoDB Atlas
- [x] Sistema leve, modular e com boas práticas

---

## 🖥️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB Atlas**
- **Mongoose**
- **express-session**
- **connect-mongo**
- **bcrypt** (criptografia de senha)
- **EJS** (engine de template)
- **HTML5 + CSS3**

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/express-login-mvc.git
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Crie o arquivo `.env`
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
MONGO_URI=sua_string_do_mongodb_atlas
SESSION_SECRET=um_valor_secreto_seguro
```

### 4. Rode o servidor
```bash
node src/app.js
```

---

## 🔑 Criando um usuário (temporariamente)

Durante o desenvolvimento, existe uma rota temporária para criar um usuário padrão no banco:

- username: `admin`
- password: `123456`


---

## 🛡️ Proteção de Rotas

O sistema possui um middleware que protege a rota `/dashboard`. O acesso só é liberado se o usuário estiver autenticado via sessão.

```js
if (req.session.userId) {
  next();
} else {
  res.redirect('/login');
}
```

---

## 🎨 Interface

### Login
- Tela estilizada com fundo inspirado no estilo Airbnb
- Inputs e botão com responsividade e contraste ideal

### Dashboard
- Tela protegida com:
  - Boas-vindas
  - Gif animado
  - Botão de logout estilizado

---




---

