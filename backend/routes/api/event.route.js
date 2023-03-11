const router = require('express').Router();
const { Event } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(event);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
