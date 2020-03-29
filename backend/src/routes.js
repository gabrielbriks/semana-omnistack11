const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// Login
routes.post("/sessions", SessionController.create);

//List ongs
routes.get("/ongs", OngController.index);
//Register ongs
routes.post("/ongs", OngController.create);

//Get casos especificos de uma ONG
routes.get("/profile", ProfileController.index);

//List Incidents
routes.get("/incidents", IncidentController.index);
//Register Incidents
routes.post("/incidents", IncidentController.create);
//Delete Incidents
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
