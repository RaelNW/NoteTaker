const express = require("express");
const routes_html = require("./routes/routes-html");
const api = require("./routes/routes-api");

const PORT = process.env.PORT || 3001;

const app = express();
