const express = require('express')
const router = express.Router()

const {filterCatByAttributes} = require("../controllers/CatController");
const requireAuthUser = require("../middleware/requireAuthUser");

// authentication route for User
router.use(requireAuthUser)

// QUERY
router.get('/', filterCatByAttributes)

module.exports = router