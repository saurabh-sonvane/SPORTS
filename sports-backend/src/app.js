require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const leadRoutes = require('./routes/lead');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.set('trust proxy', 1);

app.use((req, res, next) => {
  console.log(
    '🔍 [REQ] ',
    new Date().toISOString(),
    req.method,
    req.originalUrl || req.url,
    'content-length:', req.headers['content-length'],
    'forwarded:', req.headers['forwarded'],
    'x-forwarded-for:', req.headers['x-forwarded-for']
  );
  next();
});

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(rateLimiter);

app.use('/api/lead', leadRoutes);
app.use('/lead', leadRoutes);

app.get('/health', (req, res) => res.json({ ok: true }));

app.use(errorHandler);

module.exports = app;
