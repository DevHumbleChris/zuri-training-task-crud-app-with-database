const route = require("express").Router();
const mainControllers = require("../controllers/mainControllers")

// GET Request.
route.get("/people", mainControllers.getPayload)

// PORT Request.
route.post("/person", mainControllers.setPayload)

module.exports = route
