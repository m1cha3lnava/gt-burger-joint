const express = require("express");
const { connect } = require("./config/connection");
const { selectAll } = require("./config/orm");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("connected on port" + PORT);
selectAll();