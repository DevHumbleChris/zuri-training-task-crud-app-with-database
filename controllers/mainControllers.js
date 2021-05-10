const Person = require("../models/Person.js")
const validate = require("../validation")

module.exports = {
  getPerson: async (req, res) => {
    try {
      const results = await Person.find({})
      res.json({
        message: '200 OK!',
        code: 200,
        results,
      })
    }catch(err) {
      res.status(400).json({
        message: err.message,
        code: 400
      })
    }
  },
  setPerson: async (req, res) => {
    try {
      // Validate User Inputs.
      const { error } = validate.checkInputs(req.body)
      if(error) return res.status(400).json({
        message: error.message,
        code: 400
      })

      // Create New Person
      const newPerson = await new Person({
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
  deletePerson: async (req, res) => {
    try{
      // Check If Paramas ID For User exists.
      const user = await Person.findOne({
        _id: req.params.id
      })

      if(!user) return res.status(400).json({
        message: "User ID Not Found (Person Not Found)",
        status: "400 bad Request"
      })

      await Person.findByIdAndRemove({
        _id: req.params.id
      }).exec((err, results) => {
        if(err) return res.status(400).json({
          message: err.message,
          status: "400 Bad Request"
        })

        res.json({
          status: '200 OK!',
          message: "Person's Data Was Successfully Deleted."
        })
      })

    }catch(err){
      res.status(400).json({
        message: err.message,
        code: 400
      })
    }
  },
  updatePerson: async (req, res) => {
    try{
      // Check If Paramas ID For User exists.
      const user = await Person.findOne({
        _id: req.params.id
      })

      if(!user) return res.status(400).json({
        message: "User ID Not Found (Person Not Found)",
        status: "400 bad Request"
      })

      await Person.findByIdAndUpdate({
        _id: req.params.id
      },
      {
        $set: req.body
      }
    ).exec((err, results) => {
        if(err) return res.status(400).json({
          message: err.message,
          status: "400 Bad Request"
        })

        res.json({
          status: '200 OK!',
          message: "Person's Data Was Successfully Updated."
        })
      })

    }catch(err){
      res.status(400).json({
        message: err.message,
        code: 400
      })
    }
  }
}
