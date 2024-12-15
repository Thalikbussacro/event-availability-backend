// controllers/availabilityController.js
const Availability = require('../models/availability');

// Registrar disponibilidade para um evento
exports.registerAvailability = async (req, res) => {
  try {
    const { eventId, day, startTime, endTime } = req.body;

    // Verifica se o usuário já registrou disponibilidade
    const existingAvailability = await Availability.findOne({
      eventId,
      userId: req.userId,
      day,
    });

    if (existingAvailability) {
      return res.status(400).json({ error: 'Disponibilidade já registrada para este evento.' });
    }

    const newAvailability = new Availability({
      eventId,
      userId: req.userId,
      day,
      startTime,
      endTime,
    });

    await newAvailability.save();
    res.status(201).json(newAvailability);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar disponibilidade.' });
  }
};

// Obter disponibilidades de um evento específico
exports.getAvailabilityByEvent = async (req, res) => {
  try {
    const availabilities = await Availability.find({
      eventId: req.params.eventId,
    }).populate('userId', 'username email');

    res.json(availabilities);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar disponibilidades.' });
  }
};
