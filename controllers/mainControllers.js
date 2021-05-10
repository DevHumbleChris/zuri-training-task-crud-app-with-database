const Person = require("../models/Person.js")
const validate = require("../validation")

module.exports = {
  getPayload: async (req, res) => {
    const results = await Person.find({})
    if(!results) return res.status(201).json({
      message: 'No Data In The Database, Try To Put Data',
      code: 201
    })
    res.json({
      message: '200 OK!',
      code: 200,
      results,
    })
  },
  setPayload: async (req, res) => {
    try {
      // Validate Inputs.
      const { error } = validate.postInputs(req.body)
      if(error) return res.status(400).json({
        message: error.message,
        code: 400
      })

      // Create New Person
      const newPerson = new Person({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
      })

      await newPerson.save((err, results) => {
        if(err) return res.status(400).json({
          message: err.message,
          codecode: 400
        })
        res.json({
          code: 200,
          message: '200 OK!',
          results,
        })
      })

    }catch(err){
      res.status(400).json({
        message: err.message,
        code: 400
      })
    }
  },
  deletePayload: async (req, res) => {

  },
  updatePayload: async (req, res) => {

  }
}
