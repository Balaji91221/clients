const express = require('express');
const app = express();
const cors = require('cors');
const blogs = require('./api/EventPage.json');
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("Event server is running!");
});

app.get('/EventPage', (req, res) => {
  res.send(blogs);
});

app.get('/EventPage/:id', (req, res) => {
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

app.get('/assets/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'assets', filename);

  res.sendFile(filePath);
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
