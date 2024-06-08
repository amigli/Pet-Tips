const express = require('express')
const router = express.Router()

const {filterDogByAttributes} = require("../controllers/DogController");
const requireAuthUser = require("../middleware/requireAuthUser");

// authentication route for User
router.use(requireAuthUser)

// QUERY
router.get('/', filterDogByAttributes)

module.exports = router