function validateLead(req, res, next) {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  // basic email regex
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  next();
}

module.exports = validateLead;
