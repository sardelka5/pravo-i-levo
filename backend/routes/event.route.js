const router = require("express").Router();
const { Event } = require("../db/models");

router.get("/", async (req, res) => {
  console.log('--------------');
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch ({ message }) {
    console.log(message);
    res.status(500).json(message);
  }
});

module.exports = router;