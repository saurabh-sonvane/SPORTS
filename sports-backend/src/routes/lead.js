const express = require('express');
const router = express.Router();
const validateLead = require('../middleware/validateLead');
const { createLead } = require('../controllers/leadController');

router.post('/', validateLead, createLead);

module.exports = router;
