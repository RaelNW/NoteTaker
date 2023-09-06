//Import modules needed
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

//Define the GET request to /api/notes and return contents of the JSON file on db/db.json
router.get("/api/notes", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(dbJson);
});

//Define the POST request to /api/notes
router.post("/api/notes", (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newFeedback);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
  res.json(dbJson);
});

module.exports = router;
