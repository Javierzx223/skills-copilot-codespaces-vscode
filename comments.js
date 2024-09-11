// Create web server
const express = require('express');
const app = express();
const fs = require('fs');

// Read the comments file
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Serve static files
app.use(express.static('public'));

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const comment = JSON.parse(body);
    comments.push(comment);

    fs.writeFileSync('comments.json', JSON.stringify(comments));

    res.json(comment);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Web server is running');
});