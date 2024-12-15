// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rotas de autenticação
router.post('/register', authController.register);  // Registrar novo usuário
router.post('/login', authController.login);       // Login de usuário
router.get('/profile', authController.getProfile); // Perfil do usuário logado

module.exports = router;
