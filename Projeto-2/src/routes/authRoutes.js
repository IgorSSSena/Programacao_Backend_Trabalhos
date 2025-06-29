const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const checkAuth = require('../middlewares/authMiddleware');

router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/dashboard', checkAuth, authController.dashboard);


// Rota temporária para criar um usuário
router.get('/criar-usuario', async (req, res) => {
  const User = require('../models/User');

  const username = 'admin';
  const password = '123456';

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.send('Usuário já existe.');
  }

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.send('Usuário criado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao criar usuário.');
  }
});


module.exports = router;
