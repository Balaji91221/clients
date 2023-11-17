const express = require('express');
const app = express();
const cors = require('cors');
const blogs = require('./api/blogsData.json');
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
  res.send(blogs);
});

app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Received request for blog with id: ${id}`);
  const blog = blogs.find(b => b.id === id);

  if (blog) {
    console.log('Sending blog data:', blog);
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Serve JavaScript file
app.get('/assets/index-8e4d53ba.js', (req, res) => {
  res.type('application/javascript');
  // Your code to send the script file
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
