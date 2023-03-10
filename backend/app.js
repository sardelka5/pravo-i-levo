require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
const authRouter = require('./routes/api/auth.routes');
const feedbackRouter = require('./routes/feedback.routes');

const app = express();

expressConfig(app);

const lawyerRoute = require('./routes/lawyer.route')

// подключаем маршрутизацию
app.use('/api/auth', authRouter);
app.use('/api/lawyers', lawyerRoute)
app.use('/api/feedback', feedbackRouter);

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/`)
);
