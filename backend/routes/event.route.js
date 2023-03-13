const router = require('express').Router();
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const { Event } = require('../db/models');

const DIR = `${__dirname}/../../../frontend/public/`;
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
  // const { date, title, address, description, photo } = req.body;
  console.log(req.body);
  console.log('>>>>>>>><<<<<<<<<');

  try {
    const card = await Event.create({
      date: new Date(req.body.date),
      title: req.body.title,
      address: req.body.address,
      description: req.body.description,
      photo: `/public/${req.file.filename}`,
    });
    res.status(200).json(card);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
