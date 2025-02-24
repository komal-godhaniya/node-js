const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl")
const auth = require("../middleware/jwt")

// admin register-login

route.post("/Register", ctl.Register)
route.get("/viewRegister", ctl.viewRegister)
route.post("/Login", ctl.Login)
route.get("/viewUser", auth, ctl.viewUser)


module.exports = route