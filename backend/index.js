const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hii");
});

app.listen(1000);
