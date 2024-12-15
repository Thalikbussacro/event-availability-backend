// controllers/eventController.js
const Event = require('../models/event');

// Criar novo evento
exports.createEvent = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newEvent = new Event({
      name,
      description,
      organizerId: req.userId, // Obtido pelo middleware de autenticação
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar evento.' });
  }
};

// Listar todos os eventos do organizador logado
exports.listEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizerId: req.userId });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar eventos.' });
  }
};

// Obter detalhes de um evento específico
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Evento não encontrado.' });

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evento.' });
  }
};
