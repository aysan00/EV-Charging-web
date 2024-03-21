const express = require('express');
const app = express();
const port = 3000; // Set your desired port number

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle POST request for user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Implement registration logic (store user data securely)
  // For simplicity, I'll use an in-memory array to store users
  users.push({ username, email, password });
  res.send('Registration successful!');
});

// Handle POST request for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement login logic (check username/password validity)
  // For simplicity, I'll use an in-memory array to simulate user authentication
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid username/email or password');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:2000`);
});

// Dummy data to simulate user storage (replace with actual database logic)
const users = [];
