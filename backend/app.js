require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
const authRouter = require('./routes/api/auth.routes');
const app = express();

expressConfig(app);

// подключаем маршрутизацию
// app.use('/api/notes', notesRouter);
app.use('/api/auth', authRouter);
// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/`)
);
