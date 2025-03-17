const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by Render, or default to 3000
const port = process.env.PORT || 3000;

// Serve the static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// For any request that doesn't match a static file, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
