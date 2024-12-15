// routes/availabilityRoutes.js
const express = require('express');
const router = express.Router();
const availabilityController = require('../controllers/availabilityController');
const authMiddleware = require('../middlewares/authMiddleware');

// Proteção de autenticação
router.use(authMiddleware);

// Rotas de gerenciamento de disponibilidades
router.post('/', availabilityController.registerAvailability);  // Registrar disponibilidade
router.get('/:eventId', availabilityController.getAvailabilityByEvent); // Consultar participantes de um evento

module.exports = router;
