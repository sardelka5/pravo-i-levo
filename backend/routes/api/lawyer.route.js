const router = require('express').Router();
const { Lawyer } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const lawyers = await Lawyer.findAll({ raw: true });
    res.json(lawyers);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
