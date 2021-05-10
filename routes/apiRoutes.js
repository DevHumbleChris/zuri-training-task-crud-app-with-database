const route = require("express").Router();
const mainControllers = require("../controllers/mainControllers")

// GET Request.
route.get("/people", mainControllers.getPerson)

// PORT Request.
route.post("/person", mainControllers.setPerson)

// DELETE Request.
route.delete("/:id/person", mainControllers.deletePerson)

// PUT (Update) Request.
route.put("/:id/person", mainControllers.updatePerson)

module.exports = route
