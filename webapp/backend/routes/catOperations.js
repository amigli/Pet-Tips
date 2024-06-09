const express = require('express')
const router = express.Router()

const {filterCatByAttributes} = require("../controllers/CatController");
const {saveFavouriteCatById} = require("../controllers/UserController")
const requireAuthUser = require("../middleware/requireAuthUser");

// authentication route for User
router.use(requireAuthUser)

// QUERY
router.get('/', filterCatByAttributes)
router.post('/save', saveFavouriteCatById)

module.exports = router