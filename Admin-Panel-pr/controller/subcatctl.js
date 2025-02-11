const catSchema = require("../model/catschema")
const subCatSchema = require("../model/subcatschema")


module.exports.addSubCat = async (req,res) => {
    const data = await catSchema.find({}) 
    res.render("addSubCat",{data})
}

module.exports.addSubCategory = async (req,res) => {
    req.body.image = req.file.path
    await subCatSchema.create(req.body)
    .then(() => {
        res.redirect("/subcategory/viewSubCat")
    })
}

module.exports.viewSubCat = async (req,res) => {
    await subCatSchema
    .find({})
    .populate("categoryId")
    .then((data) => {
        res.render("viewSubCat",{data})
    })
}