const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    fname: {
        type : String,
        require: true
    },
    lname: {
        type : String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require : true
    }
})

const Schema = mongoose.model("passport", adminSchema)
module.exports = Schema