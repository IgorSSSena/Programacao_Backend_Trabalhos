const express = require('express');
const path = require('path');
const app = express();
const usuarios = require('./data/usuarios');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
require('hbs').registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.render('index', { title: 'Início' }));
app.get('/cadastro', (req, res) => res.render('cadastro', { title: 'Cadastro' }));
app.get('/login', (req, res) => res.render('login', { title: 'Login' }));
app.get('/usuarios', (req, res) => res.render('usuarios', { title: 'Usuários', usuarios }));

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));