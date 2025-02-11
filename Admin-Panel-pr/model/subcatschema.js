const mongoose = require("mongoose")

const subcatSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    price:{
        type:Number,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    rate:{
        type:String,
        require: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true
    }
})

const Schema = mongoose.model("product" , subcatSchema)
module.exports = Schema