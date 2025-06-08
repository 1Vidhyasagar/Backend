// console.log("Hello from Node.js!");

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello! Backend here 🎯");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
