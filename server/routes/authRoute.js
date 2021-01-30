const express = require('express');
const app = express.Router();

const AuthController = require('../controllers/AuthController');

app.post('/signup', AuthController.signup);
app.post('/login', AuthController.login);

module.exports = app;