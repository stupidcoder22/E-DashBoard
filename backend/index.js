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

//products api
app.get("/products", async (req, res) => {
  let product = await Product.find();
  res.send(product);
});

//delete api
app.delete("/delete/:id", async (req, res) => {
  const deleteuser = await Product.deleteOne({ _id: req.params.id });
  res.send(deleteuser);
});

//single product data get api
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ error: "data not found" });
  }
});

//update product api
app.put("/update/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  if (result) {
    res.send(result);
  } else {
    res.send({ error: "there is some problem" });
  }
});

//search Product
app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

app.listen(1000);
