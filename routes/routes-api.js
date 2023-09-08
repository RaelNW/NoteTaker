//Import modules needed
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

//Define the GET request to /api/notes and return contents of the JSON file on db/db.json
router.get("/api/notes", (req, res) => {
  try {
    const dbFilePath = path.join(__dirname, "./db/db.json");
    const dbJson = JSON.parse(fs.readFileSync(dbFilePath, "utf8"));
    res.json(dbJson);
  } catch (err) {
    console.error("Error reading the JSON file:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Define the POST request to /api/notes
router.post("/api/notes", (req, res) => {
  try {
    const dbFilePath = path.join(__dirname, "./db/db.json"); // Construct the file path
    const dbJson = JSON.parse(fs.readFileSync(dbFilePath, "utf8"));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync(dbFilePath, JSON.stringify(dbJson, null, 2)); // Pretty print with 2-space indentation
    res.json(dbJson);
  } catch (err) {
    console.error("Error writing to or reading from the JSON file:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
