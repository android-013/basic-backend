const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/contact', (req, res) => {
  console.log('Form submitted:', req.body);
  res.send('<h1>Thank you for contacting us!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});