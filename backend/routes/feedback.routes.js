const router = require('express').Router();

const { Feedback } = require('../db/models');

router.get('/', async (req, res) => {
  const feedback = await Feedback.findAll({
    order: [
      ['createdAt', 'DESC'],
      ['id', 'DESC'],
    ],
  });

  res.json(feedback);
});
