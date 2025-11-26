require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const leadRoutes = require('./routes/lead');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(rateLimiter);

app.use('/api/lead', leadRoutes);

app.get('/health', (req, res) => res.json({ ok: true }));

app.use(errorHandler);

module.exports = app;
