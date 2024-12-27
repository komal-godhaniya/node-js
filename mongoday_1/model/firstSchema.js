const mongoose = require("mongoose")
const schema = mongoose.Schema({
    image : {
        type:String,
        required:true,
    },
    name : {
        type:String,
        required:true,
    },
    author : {
        type:String,
        required:true,
    },
    publishedyear : {
        type: Number,
        required:true,
    },
    price : {
        type: Number,
        required:true,
    }
})
const firstSchema = mongoose.model("data" , schema)
module.exports = firstSchema