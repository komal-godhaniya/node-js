const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/MegaAbel-Panel")

const db = mongoose.connection

db.once("open" , (err)=>{
    err ? console.log("db is not connected") : console.log("db is connected")
})

module.exports = db