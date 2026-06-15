// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const app = express();
const db = new sqlite3.Database('./ria.db');

// Simple .env parser to load env variables from the root folder
try {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const parts = trimmed.split('=');
        if (parts.length > 1) {
          const key = parts[0].trim();
          const value = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
          process.env[key] = value;
        }
      }
    });
  }
} catch (err) {
  console.error("Error loading .env file:", err);
}

// Enable CORS for frontend requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// API Endpoints
app.get('/api/config', (req, res) => {
  res.json({
    GROQ_API_KEY: process.env.GROQ_API_KEY || "",
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || ""
  });
});

app.post('/signup', express.json(), (req, res) => {
  const { email, password } = req.body;
  db.run(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, password],
    function(err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ success: true, userId: this.lastID });
    }
  );
});

app.post('/login', express.json(), (req, res) => {
  const { email, password } = req.body;
  db.get(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, row) => {
      if (err || !row) return res.status(401).json({ error: 'Invalid credentials' });
      res.json({ success: true, user: row });
    }
  );
});

app.listen(3000, () => console.log('Server running on port 3000'));
