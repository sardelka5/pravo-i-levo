const router = require('express').Router();
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const path = require('path');
const { Event } = require('../../db/models');

const DIR = path.join(`${__dirname}/../../public/`);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, `${uuidv4()}-${fileName}`);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
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

router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({ raw: true });
    res.status(200).json(events);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Event.destroy({ where: { id } });
    // if (result > 0) {
    res.status(200).json(id);
    // }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const card = await Event.create({
      date: new Date(req.body.date),
      title: req.body.title,
      address: req.body.address,
      description: req.body.description,
      photo: `/${req.file.filename}`,
    });
    res.status(200).json(card);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
