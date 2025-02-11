const express = require("express")
const path = require("path")
const db =  require("./config/db")
const passport = require("./middleware/passport")
const session = require("express-session")
const port = 5000

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, "public")))
app.use("/public",express.static(path.join(__dirname, "public")))

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
app.use(passport.AuthenticatedUser)

app.use("/" , require("./routes/route"))
app.use("/category" , require("./routes/catroute"))
app.use("/subcategory", require("./routes/subcatroute"))

app.listen(port ,(err) => {
    err ? console.log(err) : console.log("Server Started On Port : " + port)
})
