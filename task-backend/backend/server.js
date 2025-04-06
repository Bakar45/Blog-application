const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Reading data from data.json
const dataFilePath = path.join(__dirname, 'data.json');
// console.log(dataFilePath);
let blogData = [];

// Loading the data from  JSON file
try {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  blogData = JSON.parse(data);
  console.log(blogData);  
} catch (err) {
  console.error("Error reading or parsing data.json:", err);
}

// API to get all blog posts
app.get('/api/blog-posts', (req, res) => {
  res.json(blogData);
});

// API  for searching posts
app.get("/search-posts", (req, res) => {
  try {
    const pattern = new RegExp(req.query.q, "i"); // "i" for case-insensitive matching
    // Use array filter to search title and content
    const posts = blogData.filter(post => 
      pattern.test(post.title) || pattern.test(post.content)
    );
    res.json(posts);  // Send the filtered posts back
    console.log(posts); // Optionally log the result
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
