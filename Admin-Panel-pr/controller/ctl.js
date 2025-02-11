const schema = require("../model/schema")

module.exports.login = (req,res) => {
    res.render("login")
}

module.exports.userLogin = (req,res) => {
    res.redirect("/dashboard")
}

module.exports.logout = (req,res) => {
    req.session.destroy()
    res.redirect("/")
}

module.exports.dashboard = (req, res) => {
    res.render("dashboard")
}

module.exports.profile = (req, res) => {
    res.render("profile")
}

module.exports.addAdmin = (req, res) => {
    res.render("addAdmin", { data: null, isEdit: false })
}

module.exports.addAdminData = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/viewAdmin")
        })
}

module.exports.viewAdmin = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.render("viewAdmin", { data })
        })
}

module.exports.editAdminData = async (req, res) => {
    let data = await schema.findById(req.query.id)
    res.render("addAdmin", { data, isEdit: true })
}

module.exports.updateAdminData = async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then((data) => {
            res.redirect("/viewAdmin")
        })
}

module.exports.deleteAdminData = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
        .then((data) => {
            res.redirect("/viewAdmin")
        })
}