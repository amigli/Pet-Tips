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

    const emptyFields = []

    if (!Breed) {
        emptyFields.push('Breed')
    }

    if (emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

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

    const dog = await Dog.findOneAndUpdate({_id: id}, {...req.body}, {new: true})

    if (!dog){
        return res.status(404).json({error: "No such dog (deleteDogById)"})
    }

    return res.status(200).json(dog)
}


// QUERY
const filterDogByAttributes = async (req, res) => {
    const { Adapts_Well_to_Apartment_Living, Affectionate_with_Family, Dog_Friendly, Easy_To_Groom, Easy_To_Train,
        Friendly_Toward_Strangers, Incredibly_Kid_Friendly_Dogs, Intelligence, Potential_For_Playfulness,
        Prey_Drive, Size, Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather,
        Tolerates_Hot_Weather, Type, Purchase_Price } = req.body;

    const query = {};

    // Add attributes not null in query
    if (Adapts_Well_to_Apartment_Living !== undefined) query.Adapts_Well_to_Apartment_Living = Adapts_Well_to_Apartment_Living;
    if (Affectionate_with_Family !== undefined) query.Affectionate_with_Family = Affectionate_with_Family;
    if (Dog_Friendly !== undefined) query.Dog_Friendly = Dog_Friendly;
    if (Easy_To_Groom !== undefined) query.Easy_To_Groom = Easy_To_Groom;
    if (Easy_To_Train !== undefined) query.Easy_To_Train = Easy_To_Train;
    if (Friendly_Toward_Strangers !== undefined) query.Friendly_Toward_Strangers = Friendly_Toward_Strangers;
    if (Incredibly_Kid_Friendly_Dogs !== undefined) query.Incredibly_Kid_Friendly_Dogs = Incredibly_Kid_Friendly_Dogs;
    if (Intelligence !== undefined) query.Intelligence = Intelligence;
    if (Potential_For_Playfulness !== undefined) query.Potential_For_Playfulness = Potential_For_Playfulness;
    if (Prey_Drive !== undefined) query.Prey_Drive = Prey_Drive;
    if (Size !== undefined) query.Size = Size;
    if (Tendency_To_Bark_Or_Howl !== undefined) query.Tendency_To_Bark_Or_Howl = Tendency_To_Bark_Or_Howl;
    if (Tolerates_Being_Alone !== undefined) query.Tolerates_Being_Alone = Tolerates_Being_Alone;
    if (Tolerates_Cold_Weather !== undefined) query.Tolerates_Cold_Weather = Tolerates_Cold_Weather;
    if (Tolerates_Hot_Weather !== undefined) query.Tolerates_Hot_Weather = Tolerates_Hot_Weather;
    if (Type !== undefined) query.Type = Type;
    if (Purchase_Price !== undefined) query.Purchase_Price = {$lte: Purchase_Price};

    const dogs = await Dog.find(query)

    if (!dogs){
        return res.status(404).json({error: "No such dog (filterDog)"})
    }

    return res.status(200).json(dogs)
}

module.exports = {
    getAllDogs,
    getDogById,
    insertDog,
    deleteDogById,
    updateDogById,
    filterDogByAttributes,
}