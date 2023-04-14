// Import the recipes
import * as db from './db';

// Import express
import express from 'express';

// Create a new express app instance
const app = express();

// Configure Express to parse JSON
app.use(express.json());

// Make the PORT configurable
const { PORT = 3000 } = process.env;

// GET /recipes
app.get('/recipes', (req, res) => {
  res.send(db.get());
});

// GET /recipes/:idx
app.get('/recipes/:idx', (req, res) => {
  // Convert the idx parameter to a number, so we can pass to getByIndex
  const idx = Number(req.params.idx);
  res.send(db.getByIndex(idx));
});

// POST /recipes
app.post('/recipes', (req, res) => {
  const recipe = req.body;
  db.add(recipe);
  res.send(recipe);
});

// Start the Express server, displaying the localhost URL
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});