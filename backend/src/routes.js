const express = require("express");
const crypto = require("crypto");

const routes = express.Router();

routes.post("/ongs", (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  console.log(body);

  return res.json();
});

module.exports = routes;
