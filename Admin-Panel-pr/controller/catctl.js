const catSchema =require("../model/catschema")
const path = require("path")

module.exports.addCat = (req,res) => {
    res.render("addCat" , {data:null})
}

module.exports.addCategory = async (req,res) => {
    req.body.image = req.file.path
    await catSchema.create(req.body)
    .then(() => {
        res.redirect("/category/viewCat")
    })
}

module.exports.viewCat = async(req,res) => {
    await catSchema.find({})
    .then((data) => {
        res.render("viewCat", {data})
    })
}
