const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  "mongodb+srv://aayush:12345@atlascluster.i90q0bw.mongodb.net/TrulyHustle?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("no connection");
  });

//Middleware

const middleware = (req, rest, next) => {
  console.log(`middleware called`);
  next();
};

app.get("/", (req, res) => {
  res.send(`home page`);
  console.log(`middleware called`);
});

app.get("/learn", middleware, (req, res) => {
  res.send(`home page`);
  console.log(`home called`);
});

app.get("/login", (req, res) => {
  res.send(`login page`);
  console.log(`login called`);
});
app.get("/signup", (req, res) => {
  res.send(`sign up`);
  console.log(`sign up called`);
});

app.listen(3000, () => {
  console.log("server is running");
});
