const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

app.use(express.json());
app.use(cors());

//register api
app.post("/register", async (req, res) => {
  let user = await new User(req.body);
  let data = await user.save();
  data = data.toObject();
  delete data.password;
  res.send(data);
});

//login api
app.post("/login", async (req, res) => {
  let userdata = req.body;

  if (userdata.email && userdata.password) {
    const databaseuser = await User.findOne(userdata).select("-password");
    if (databaseuser) {
      res.send(databaseuser);
    } else {
      res.send({ result: "no data found" });
    }
  } else {
    res.send({ result: "no data found" });
  }
});

// add-product api
app.post("/add-product", async (req, res) => {
  let product = await new Product(req.body);
  let data = await product.save();
  res.send(data);
});

//product-list api
app.get("/product-list", async (req, res) => {
  let product = await Product.find();
  res.send(product);
});

app.listen(1000);
