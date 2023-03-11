const router = require('express').Router();
const { Feedback } = require('../../db/models');

router.get('/', async (req, res) => {
  const feedback = await Feedback.findAll({
    where: { lawyer_id: req.params.id },
  });

  res.json(feedback);
});

module.exports = router;
