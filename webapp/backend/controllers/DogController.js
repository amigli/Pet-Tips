const Dog = require('../models/DogModel')
const mongoose = require('mongoose')


// GET ALL DOGS
const getAllDogs = async (req, res) => {
    const dogs = await Dog.find({}).sort({Breed: 1})
    return res.status(200).json(dogs)
}


// GET A SINGLE DOG
const getDogById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Dog ID (getDogById)"})
    }

    const dog = await Dog.findById(id)

    if (!dog){
        return res.status(404).json({error: "No such dog (getDogById)"})
    }

    return res.status(200).json(dog)
}


// INSERT A SINGLE DOG
const insertDog = async (req, res) => {
    const { Breed, Adaptability, Exercise_Needs, Health_Grooming, Trainability, Adapts_Well_to_Apartment_Living,
        Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly, Drooling_Potential, Easy_To_Groom, Easy_To_Train,
        Energy_Level, Friendly_Toward_Strangers, General_Health, Good_For_Novice_Owners, Incredibly_Kid_Friendly_Dogs,
        Intelligence, Intensity, Potential_For_Mouthiness, Potential_For_Playfulness, Potential_For_Weight_Gain,
        Prey_Drive, Sensitivity_Level, Size, Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather,
        Tolerates_Hot_Weather, Wanderlust_Potential, Type, Congenital_Ailments, Lifetime_Cost, Longevity_Years,
        Number_of_Congenital_Ailments, Purchase_Price, Food_Costs_Per_Year, Grooming_Frequency } = req.body;

    try {
        const dog = await Dog.create({ Breed, Adaptability, Exercise_Needs, Health_Grooming, Trainability,
            Adapts_Well_to_Apartment_Living, Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly,
            Drooling_Potential, Easy_To_Groom, Easy_To_Train, Energy_Level, Friendly_Toward_Strangers, General_Health,
            Good_For_Novice_Owners, Incredibly_Kid_Friendly_Dogs, Intelligence, Intensity, Potential_For_Mouthiness,
            Potential_For_Playfulness, Potential_For_Weight_Gain, Prey_Drive, Sensitivity_Level, Size,
            Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather, Tolerates_Hot_Weather,
            Wanderlust_Potential, Type, Congenital_Ailments, Lifetime_Cost, Longevity_Years,
            Number_of_Congenital_Ailments, Purchase_Price, Food_Costs_Per_Year, Grooming_Frequency })
        return res.status(200).json(dog)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


// DELETE A SINGLE DOG
const deleteDogById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Dog ID (deleteDogById)"})
    }

    const dog = await Dog.findOneAndDelete({_id: id})

    if (!dog){
        return res.status(404).json({error: "No such dog (deleteDogById)"})
    }

    return res.status(200).json(dog)
}


// UPDATE A SINGLE DOG
const updateDogById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Dog ID (deleteDogById)"})
    }

    const dog = await Dog.findOneAndUpdate({_id: id}, {...req.body})

    if (!dog){
        return res.status(404).json({error: "No such dog (deleteDogById)"})
    }

    return res.status(200).json(dog)
}


// QUERY

module.exports = {
    getAllDogs,
    getDogById,
    insertDog,
    deleteDogById,
    updateDogById
}