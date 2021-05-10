const Joi = require("joi")

module.exports = {
  checkInputs: (data) => {
    const checkInputSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      country: Joi.string().required()
    })

    return checkInputSchema.validate(data)
  }
}
