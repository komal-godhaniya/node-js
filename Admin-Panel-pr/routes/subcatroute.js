const express = require("express")
const route = express.Router()
const subctl = require("../controller/subcatctl")
const passport = require("../middleware/passport")
const  multer = require("../middleware/multer")

route.get("/addSubCat" ,passport.CheckAuth, subctl.addSubCat)
route.get("/viewSubCat" ,passport.CheckAuth, subctl.viewSubCat)

route.post("/addSubCat" ,passport.CheckAuth,multer, subctl.addSubCategory)

module.exports = route
