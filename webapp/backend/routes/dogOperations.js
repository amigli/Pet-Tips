const express = require('express')
const router = express.Router()

const {filterDogByAttributes} = require("../controllers/DogController");
const {saveFavouriteDogById} = require("../controllers/UserController")
const requireAuthUser = require("../middleware/requireAuthUser");

// authentication route for User
router.use(requireAuthUser)

// QUERY
router.post('/', filterDogByAttributes)

router.post('/save', saveFavouriteDogById)

module.exports = router