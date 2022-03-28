const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = await new User(req.body);
  let data = await user.save();
  res.send(data);
});

app.listen(1000);
