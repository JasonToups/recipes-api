// Require the tool that makes building servers not suck
const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

// --------------------------- Routes

app.get('/', (req, res) => {
  console.log('Home Route');

});

// Start Server (Listen for Requests)
app.listen(PORT, () => console.log("Server running at http://localhost:4000"))