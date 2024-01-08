const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000; // or any port you prefer

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware
app.use(bodyParser.json());

// SignIn endpoint
app.post('/signInEndpoint', (req, res) => {
  const { username, password } = req.body;

  // Replace this with actual MySQL query to check credentials
  // For simplicity, we assume a table named 'users' with columns 'username' and 'password'
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        // Valid credentials
        res.json({ message: 'Welcome! Successful Sign In' });
      } else {
        // Invalid credentials
        res.json({ message: 'Invalid username or password' });
      }
    }
  });
});

// SignUp endpoint
app.post('/signUpEndpoint', (req, res) => {
  const { username, password } = req.body;

  // Replace this with actual MySQL query to insert a new user
  // For simplicity, we assume a table named 'users' with columns 'username' and 'password'
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json({ message: 'Successful Sign Up' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
