const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Omnistack");
});

app.listen(3333);
