const express = require("express")
const port = 1009

const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded())

let students = []

app.get("/", (req, res) => {
    res.render("index", { students })
})

app.post("/addData", (req, res) => {
    req.body.id = String(Date.now())
    students.push(req.body)
    res.redirect("/")
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = students.filter((e) => e.id !== req.query.id);
    students = deleteRecord;
    res.redirect("/");
})

app.get("/editData/:id", (req, res) => {
    let singleData = students.find((item) => item.id == req.params.id)
    res.render("edit", { singleData })
})

app.post("/UpdateData", (req, res) => {
    students.map((e, i) => {
        if (e.id == req.body.id) {
            (e.id = req.body.id),
            (e.name = req.body.name),
            (e.subject = req.body.subject)
        }
        else {
            e
        }
    })
    res.redirect("/")
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port " + port)
})





