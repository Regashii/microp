const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint /api/alert/

app.get('/api/alert/', (req, res) => {
    res.json({ message: 'Welcome to the server' });
});

app.post('/api/alert/', (req, res) => {
    res.json({ message: 'Warning: This is a warning message!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
