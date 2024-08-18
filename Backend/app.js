const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/cards"));

app.get("/ping", (req, res) => res.send("Server is running"));

module.exports = app;
