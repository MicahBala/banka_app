const express = require("express");

const app = express();

app.get("/", function(req, res) {
  return res.send("The API endpoint is working!!!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server listening on port 3000...");
});
