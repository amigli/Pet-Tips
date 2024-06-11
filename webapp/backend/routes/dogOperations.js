const express = require('express')
const router = express.Router()

const {filterDogByAttributes} = require("../controllers/DogController");
const {saveFavouriteDogById} = require("../controllers/UserController")
const requireAuthUser = require("../middleware/requireAuthUser");

// QUERY
router.post('/', filterDogByAttributes)

// authentication route for User
router.post('/save', requireAuthUser, saveFavouriteDogById)

module.exports = router