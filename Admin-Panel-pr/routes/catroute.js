const express = require("express")
const route = express.Router()
const catCtl = require("../controller/catctl")
const multer = require("../middleware/multer")
const passport = require("../middleware/passport")

route.get("/addCat",passport.CheckAuth, catCtl.addCat)
route.get("/viewCat",passport.CheckAuth, catCtl.viewCat)

route.post("/addCat",passport.CheckAuth, multer, catCtl.addCategory)

module.exports = route