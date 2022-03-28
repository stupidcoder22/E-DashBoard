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
  data = data.toObject();
  delete data.password;
  res.send(data);
});

app.post("/login", async (req, res) => {
  let userdata = req.body;

  if (userdata.email && userdata.password) {
    const databaseuser = await User.findOne(userdata).select("-password");
    if (databaseuser) {
      res.send(databaseuser);
    } 
    else {
      console.log("first else");
      res.send({ result: "no data found" });
    }
  } else {
    res.send({ result: "no data found" });
  }
});

app.listen(1000);
