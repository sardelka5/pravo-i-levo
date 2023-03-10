const router = require('express').Router();
const { Lawyer } = require('../../db/models');

router
  .get('/', async (req, res) => {
    try {
      const lawyers = await Lawyer.findAll({ raw: true });
      res.json(lawyers);
    } catch ({ message }) {
      res.json(message);
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const lawyer = await Lawyer.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json(lawyer);
    } catch ({ message }) {
      res.json(message);
    }
  });

module.exports = router;
