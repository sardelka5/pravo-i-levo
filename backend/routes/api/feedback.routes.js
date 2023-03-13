const router = require('express').Router();
const { Feedback } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const feedback = await Feedback.findAll({
    where: { lawyer_id: req.params.id, accepted: true },
  });
  res.json(feedback);
});

router.post('/', async (req, res) => {
  const {
    feedbackName,
    inputDate,
    inputPhone,
    inputEmail,
    inputAboutFeedback,
    id,
  } = req.body;

  const fb = await Feedback.create({
    lawyer_id: id,
    accepted: false,
    content: inputAboutFeedback,
    full_name: feedbackName,
    date: new Date(inputDate),
    phone: inputPhone,
    email: inputEmail,
  });

  return res.status(201).json(fb);
});

module.exports = router;
