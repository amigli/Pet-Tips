const express = require('express')
const router = express.Router()

const {filterCatByAttributes} = require("../controllers/CatController");
const {saveFavouriteCatById, deleteFavouriteCatById} = require("../controllers/UserController")
const requireAuthUser = require("../middleware/requireAuthUser");

// QUERY
router.post('/', filterCatByAttributes)

// SAVE A FAVOURITE CAT
router.post('/save', requireAuthUser, saveFavouriteCatById)

// DELETE A FAVOURITE CAT
router.delete('/:idCat', requireAuthUser, deleteFavouriteCatById)

module.exports = router