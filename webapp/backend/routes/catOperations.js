const express = require('express')
const router = express.Router()

const {filterCatByAttributes} = require("../controllers/CatController");
const {saveFavouriteCatById} = require("../controllers/UserController")
const requireAuthUser = require("../middleware/requireAuthUser");

// QUERY
router.get('/', filterCatByAttributes)

// authentication route for User
router.post('/save', requireAuthUser,saveFavouriteCatById)

module.exports = router