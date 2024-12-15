// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas de eventos protegidas por autenticação
router.use(authMiddleware); // Requer autenticação para todas as rotas abaixo

router.post('/', eventController.createEvent);   // Criar evento
router.get('/', eventController.listEvents);     // Listar todos os eventos do usuário logado
router.get('/:id', eventController.getEvent);    // Detalhes de um evento específico

module.exports = router;
