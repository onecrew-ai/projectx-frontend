const express = require('express');
const path = require('path');
const app = express();

// 1. DYNAMIC PORT ASSIGNMENT (The Render Fix)
// Render will inject process.env.PORT. Locally, it safely falls back to 3000.
const PORT = process.env.PORT || 3000;

// 2. SERVE STATIC FILES
// Exposes the base directory so the browser can find node_modules and src
app.use(express.static(__dirname));

// 3. ROUTING
// Send the HTML file directly when someone visits the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// 4. START THE SERVER
// Listen on all network interfaces (0.0.0.0) so Render's load balancers can reach it
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on port ${PORT}`);
});