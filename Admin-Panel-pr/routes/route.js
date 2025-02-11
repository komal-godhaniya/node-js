const express = require("express")
const route = express.Router()
const ctl = require("../controller/ctl")
const passport = require("../middleware/passport")


route.get("/", ctl.login)
route.post("/userLogin", passport.authenticate("local", { failureRedirect: "/" }), ctl.userLogin)

route.get("/logout", passport.CheckAuth, ctl.logout)

route.get("/dashboard", passport.CheckAuth, ctl.dashboard)
route.get("/profile", ctl.profile)

route.get("/addAdmin", passport.CheckAuth, ctl.addAdmin)
route.get("/viewAdmin", passport.CheckAuth, ctl.viewAdmin)

route.post("/addAdminData", ctl.addAdminData)
route.get("/deleteAdminData", ctl.deleteAdminData)
route.get("/editAdminData", ctl.editAdminData)
route.post("/updateAdminData", ctl.updateAdminData)

route.get("/changePass", passport.CheckAuth, ctl.changePass)
route.post("/changePass", passport.CheckAuth, ctl.changePassword)

route.get("/forgetPass", ctl.forgetPass)

route.post("/forgetPass", ctl.recoverpass)

route.post("/verifypass", ctl.verifypass)

module.exports = route