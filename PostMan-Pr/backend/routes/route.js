const express = require("express")
const route = express.Router();
const ctl = require("../controller/signinctl")
const auth = require("../middleware/jwt")
const multer = require("../middleware/multer")

// admin register-login

route.post("/adminRegister", ctl.adminRegister)
route.get("/viewadminRegister", ctl.viewadminRegister)
route.post("/adminLogin", ctl.adminLogin)
route.get("/viewadminUser", auth, ctl.viewadminUser)

// doctor register-login

route.post("/doctorRegister", ctl.doctorRegister)
route.get("/viewdoctorRegister", ctl.viewdoctorRegister)
route.post("/doctorLogin", ctl.doctorLogin)
route.get("/viewdoctorUser", auth, ctl.viewdoctorUser)

// patient register-login

route.post("/patientRegister", multer, ctl.patientRegister)
route.get("/viewpatientRegister", ctl.viewpatientRegister)
route.post("/patientLogin", ctl.patientLogin)
route.get("/viewpatientUser", auth, ctl.viewpatientUser)
route.put("/updatepatient/:id", ctl.updatepatient)


module.exports = route