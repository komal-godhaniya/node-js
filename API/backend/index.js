const express = require("express")
const port = 3000

const app = express()

const db = require("./config/db")
const cors = require("cors")
const jwt = require("jsonwebtoken")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({ origin: "http://localhost:5173" }))
app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started in port " + port)
})