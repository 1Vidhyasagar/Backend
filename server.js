// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Route - Hello from Express!");
// });

// app.get("/about", (req, res) => {
//   res.send("About Route");
// });

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/skills", (req, res) => {
  res.send("Full Stack, AI, DevOps");
});

app.get("/about", (req, res) => {
  res.send("Hi, I'm Vidhyasagar 👋, learning MERN + AI to get ₹25 LPA job.");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
