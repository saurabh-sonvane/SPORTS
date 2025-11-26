const app = require('./app');
const connectToDatabase = require('./db');

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();

process.on('SIGTERM', () => {
  console.info('SIGTERM received, shutting down');
  process.exit(0);
});
