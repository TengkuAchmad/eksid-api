// PACKAGES
const express       = require("express")
const cors          = require("cors")
const compression   = require("compression")
const bodyParser    = require("body-parser")
const cookieParser  = require("cookie-parser")


const PORT = process.env.PORT || 5000
const app = express()

app.use(cors({ origin: '*'}));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.use(compression())

app.get("/", (req, res) => {
  res.send("Welcome to your App!")
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})