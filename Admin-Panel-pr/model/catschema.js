const mongoose = require("mongoose")

const  CatSchema = mongoose.Schema({
    category:{
        type: String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

const Schema = mongoose.model("Category" , CatSchema)
module.exports = Schema