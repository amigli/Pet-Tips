const express = require('express')

const router = express.Router()

const {
    getAllDogs,
    getDogById,
    insertDog,
    deleteDogById,
    updateDogById
} = require("../controllers/DogController")

// middleware
const requireAuthAdmin = require('../middleware/requireAuthAdmin')
router.use(requireAuthAdmin)

// if authentication has success

// GET ALL DOGS
router.get('/', getAllDogs)

// GET A SINGLE DOG
router.get('/:id', getDogById)

// INSERT A SINGLE DOG
router.post('/', insertDog)

// DELETE A SINGLE DOG
router.delete('/:id', deleteDogById)

// UPDATE A SINGLE DOG
router.patch('/:id', updateDogById)

// QUERY

module.exports = router