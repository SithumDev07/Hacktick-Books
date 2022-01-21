const {User} = require("../models/user");
const express = require("express");
const router = express.Router();
//const homeService = require("../services/homeService");
//const userService = require("../services/userService");

router.get("/signin", async(req, res) => {
    res.render("signin.ejs", {message: "Hellow"}) 
})

// router.post("/signin", async(req, res) => {
//     homeService
//     .signInUser(req.body.email, req.body.pasword){

//     }
// })

module.exports = router;