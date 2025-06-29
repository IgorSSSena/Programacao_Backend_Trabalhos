const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.render('login', { error: 'Usuário não encontrado' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.render('login', { error: 'Senha incorreta' });

  req.session.userId = user._id;
  res.redirect('/dashboard');
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};

exports.dashboard = (req, res) => {
  res.render('dashboard', { username: req.session.username });
};
