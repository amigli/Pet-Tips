const express = require('express')
const router = express.Router()

const {filterDogByAttributes, deleteDogById} = require("../controllers/DogController");
const {saveFavouriteDogById, deleteFavouriteDogById} = require("../controllers/UserController")
const requireAuthUser = require("../middleware/requireAuthUser");

// QUERY
router.post('/', filterDogByAttributes)

// SAVE A FAVOURITE DOG
router.post('/save', requireAuthUser, saveFavouriteDogById)

// DELETE A FAVOURITE DOG
router.delete('/:idDog', requireAuthUser, deleteFavouriteDogById)

module.exports = router