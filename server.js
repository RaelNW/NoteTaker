const express = require("express");
const routes_html = require("./routes/routes-html");
const api = require("./routes/routes-api");

const PORT = process.env.PORT || 3001;

const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

app.use(express.static("public")); //Serve the static files in the public folder

app.use("/api", api); //Set api routes to be accessible under the path /api
app.use("/", routes_html); //Set html routes to be accessible under the path /

//Start Express.js and listen for incoming HTTP requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
