const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set();
app.use(express.static(path.join(__dirname, "../public")));



module.exports = app;
