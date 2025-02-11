const schema = require("../model/schema")
const mailer = require("../middleware/mailer")

module.exports.login = (req, res) => {
    res.render("login")
}

module.exports.userLogin = (req, res) => {
    res.redirect("/dashboard")
}

module.exports.logout = (req, res) => {
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

module.exports.changePass = async (req, res) => {
    res.render("changePass")
}

module.exports.changePassword = async (req, res) => {
    // console.log(req.body)

    let user = req.user

    if (user.password == req.body.oldPass) {
        if (req.body.oldPass != req.body.newPass) {
            if (req.body.newPass == req.body.confirmPass) {
                let admin = await schema.findByIdAndUpdate(user.id, { password: req.body.newPass })
                admin && res.redirect("/logout")
            }
            else {
                console.log("New Password And Confirm Password are must be same")
            }
        }
        else {
            console.log("Old Password and New Password Must Be Different")
        }
    }
    else {
        console.log("Old Password is wrong")
    }
}


// Forget Password


module.exports.forgetPass = (req,res) => {
    res.render("forgetPass")
}

module.exports.recoverpass = async (req, res) => {
    // console.log(req.body)
    let admin = await schema.findOne({ email: req.body.email })
    if (!admin) {
        return res.redirect("/forgetPass")
    }
    let otp = Math.floor(Math.random() * 100000 + 900000)
    mailer.sendotp(req.body.email, otp)

    req.session.otp = otp
    req.session.adminData = admin
    res.render("verifyotp")
}

module.exports.verifypass = async (req, res) => {
    let otp = req.session.otp
    let admin = req.session.adminData

    // console.log(otp,admin)

    if (req.body.otp == otp) {
        
        if (req.body.newPass == req.body.confirmPass) {
            let adminData = await schema.findByIdAndUpdate(admin._id, { password: req.body.newPass,})
            adminData && res.redirect("/logout")
        }
        else {
            console.log("New Password And Confirm Password are must be same")
        }
    }
    else {
        res.redirect("/")
    }
}