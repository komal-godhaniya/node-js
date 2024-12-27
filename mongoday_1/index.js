const express = require("express")
const port = 2001

const app = express()
const db = require("./config/db")
const schema = require("./model/firstSchema")
const { Schema } = require("mongoose")

app.set("view engine", "ejs")
app.use(express.urlencoded())

let book = [
    {
        id: 1,
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_kjOJ2izocPQIzgnS06yyaU8dhXh1mEPI7pD_HVhns3N_Bzed5tUKFeZvv_2C7Im4bIvUdxTnJSjpbKJj5sJcwAz9GG6_W2OSoq8jhfJhMC2t4RZotKAs&usqp=CAE",
        name: "The Beautiful And Damand",
        author: "Louisa Hichen",
        publishedyear: "1992",
        price: "₹399.00",
    },
    {
        id: 2,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDP1AaCVHl8uEcx4X4UpGXND4NhFxngg4Ss_eUixfXGSPoLaQFNkkBjTvhaqFbftgCqNpHtI0q-6UZp2AHrSSTUuK-9vsRItm8LRI1bW8&usqp=CAE",
        name: "Little Women",
        author: "Louisa May Alcott",
        publishedyear: "1868",
        price: "₹291.00",
    },
]

app.get("/", async (req, res) => {
    // let data = await schema.find({})
    let dbData = await schema.find({});

    // Merge predefined books with database data
    let data = [...book, ...dbData];
    res.render("index", { data })
})

app.post("/addData", async (req, res) => {
    // console.log(req.body)
    await schema.create(req.body)
        .then(data => {
            res.redirect("/")
        })
})

app.get("/deleteData", async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
    .then((data) => {
        res.redirect("/")
    })
})

app.get("/editData" , async (req,res) => {
    let data = await schema.findById(req.query.id)
    res.render("edit" , {data})
})

app.post("/updateData", async (req,res) => {
    await schema.findByIdAndUpdate(req.body.id , req.body)
    .then((data) => {
        res.redirect("/")
    })
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started port :" + port)
})

