const express = require("express")
import {login,signup } from '../controllers/Auth.js';


const router = express.Router()



// Routes for Login, Signup

router.post("/login", login)

// Route for user signup
router.post("/signup", signup)




module.exports = router