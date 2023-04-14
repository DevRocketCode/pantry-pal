// Import express
import express from 'express';

// Create a new express app instance
const app = express();

// Make the PORT configurable
const { PORT = 3000 } = process.env;

// GET /
app.get('/', (req, res) => {
  res.send('Recipes to come');
});

// Start the Express server, displaying the localhost URL
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});