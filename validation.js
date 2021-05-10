const Joi = require("joi")

module.exports = {
  postInputs: (data) => {
    const postInputSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      country: Joi.string().required()
    })

    return postInputSchema.validate(data)
  }
}
