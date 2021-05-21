const express = require("express")
const app = express()

const cors = require("cors")
require("dotenv").config()

const quotesRoute = require("./routes/quoteRoute")

const mongoConnection = require("./mongooseConnection")
mongoConnection()

app.use(express.json())
app.use(cors())

app.use("/api/quotes", quotesRoute)

module.exports = app