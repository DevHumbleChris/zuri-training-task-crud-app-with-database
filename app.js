require("dotenv/config")
require("colors")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const apiRoutes = require("./routes/apiRoutes")

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares.
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Route Middleware.
app.use("/api", apiRoutes)

// Error Handling.
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'Error 404: Invalid URL',
    code: 404
  })
})
app.use(function (err, req, res, next) {
  res.status(500).json({
    message: 'Internal Server Error',
    code: 500
  })
})

// MongoDB Setup.
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Database Setup.
const db = mongoose.connection
db.on('error', console.error.bind('console', "Failed To Connect To The MongoDB Server"))
db.once('open', () => {
  console.log(`Connection To The MongoDB Server Was Successful.`.bold.green)
})

app.listen(PORT, () => {
  console.log(`Server Started At PORT: ${PORT}`.bold.blue)
})
