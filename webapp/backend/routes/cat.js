const express = require('express')

const router = express.Router()

const {
    getAllCats,
    getCatById,
    insertCat,
    deleteCatById,
    updateCatById
} = require("../controllers/CatController")

// middleware
const requireAuthAdmin = require('../middleware/requireAuthAdmin')
router.use(requireAuthAdmin)

// if authentication has success

// GET ALL CATS
router.get('/', getAllCats)

// GET A SINGLE CAT
router.get('/:id', getCatById)

// INSERT A SINGLE CAT
router.post('/', insertCat)

// DELETE A SINGLE CAT
router.delete('/:id', deleteCatById)

// UPDATE A SINGLE CAT
router.patch('/:id', updateCatById)

module.exports = router
