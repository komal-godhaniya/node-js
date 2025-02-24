const mongoose = require("mongoose")

const Apischema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    phone:{
        type : Number,
        require: true,
    },
    gender: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }
})

const schema = mongoose.model("Patientsignin", Apischema)
module.exports = schema