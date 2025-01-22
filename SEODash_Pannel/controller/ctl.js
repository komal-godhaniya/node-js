const schema = require("../model/schema")


module.exports.login = async (req, res) => {
    res.render("login")
}

module.exports.userLogin = async (req, res) => {

    res.redirect("/dashboard")

    // let admin = await schema.findOne({ email: req.body.email })

    // if (admin) {
    //     if (admin.password == req.body.password) {
    //         res.cookie("adminData", admin)
    //         res.redirect("/dashboard")
    //     } else {
    //         res.redirect("/")
    //     }
    // } else {
    //     res.redirect("/")
    // }
}


module.exports.logout = (req, res) => {
    // res.clearCookie("adminData")
    req.session.destroy()
    res.redirect("/")
}


module.exports.dashboard = async (req, res) => {
    res.render("dashboard")
}

module.exports.addAdmin = async (req, res) => {
    res.render("addAdmin", { data: null, isEdit: false })
};


module.exports.addAdminData = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/addAdmin")
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

