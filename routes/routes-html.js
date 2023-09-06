//Import modules needed
const router = require("express").Router();
const path = require("path");

// Define a route for serving "notes.html" when a GET request is made
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Define a route for serving "index.html" when a GET request is made
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Define a catch-all route to serve "index.html" for all other routes
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
