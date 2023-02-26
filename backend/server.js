const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("API Created");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((e) => e.id === req.params.id);

  res.send(note);
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, console.log(`server started on port ${PORT}`));
