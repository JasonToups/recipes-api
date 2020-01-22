// Require the tool that makes building servers not suck
const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

// --------------------------- MIDDLEWARE --------------------------- //
// run on all paths
// looks for the whole current directory path, then goes to the public directory
app.use(express.static(__dirname + '/public'))

// --------------------------- Routes --------------------------- //

app.get('/', (req, res) => {
  console.log('Home Route');
  res.sendStatus(200);
});

// Start Server (Listen for Requests)
app.listen(PORT, () => console.log("Server running at http://localhost:4000"))