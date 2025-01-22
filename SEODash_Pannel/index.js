const express = require("express")
const db = require("./config/db")
const cookies = require("cookie-parser")
const passport = require("./middleware/passport")
const session = require("express-session")
const port = 5000

const app = express()


app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(express.static("public"))

app.use(
    session({
        name: "local",
        secret: "rnw",
        resave: true,
        saveUninitialized: false,
        cookie: { maxage: 100 * 100 * 60 },
    })
)

app.use(passport.initialize())
app.use(passport.session())


app.use("/", require("./routes/route"))


app.get("/", (req, res) => {
    res.render("dashboard")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on : " + port)
})