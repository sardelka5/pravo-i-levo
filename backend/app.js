require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
const authRouter = require('./routes/api/auth.routes');
const feedbackRouter = require('./routes/api/feedback.routes');
const lawyerRoute = require('./routes/api/lawyer.route');
const apiTgRoute = require('./routes/api/tg.routes');
const eventRoute = require('./routes/api/event.route');

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/events', eventRoute);
app.use('/api/auth', authRouter);
app.use('/api/lawyers', lawyerRoute);
app.use('/api/feedback', feedbackRouter);
app.use('/api/tg', apiTgRoute);

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/`)
);
