const serverless = require('serverless-http');
const app = require('./src/app'); // path from repo root to your app
module.exports = serverless(app);