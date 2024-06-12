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
    let { Breed, All_Around_Friendliness, Adaptability, Exercise_Needs, Health_Grooming, Trainability, Adapts_Well_to_Apartment_Living,
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

    if (Type === "") Type = null
    if (Congenital_Ailments === "") Congenital_Ailments = null
    if (Grooming_Frequency === "") Grooming_Frequency = null

    if (Congenital_Ailments){
        Number_of_Congenital_Ailments = Congenital_Ailments.split(',').length
    }

    try {
        const dog = await Dog.create({ Breed, All_Around_Friendliness, Adaptability, Exercise_Needs, Health_Grooming, Trainability,
            Adapts_Well_to_Apartment_Living, Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly,
            Drooling_Potential, Easy_To_Groom, Easy_To_Train, Energy_Level, Friendly_Toward_Strangers, General_Health,
            Good_For_Novice_Owners, Incredibly_Kid_Friendly_Dogs, Intelligence, Intensity, Potential_For_Mouthiness,
            Potential_For_Playfulness, Potential_For_Weight_Gain, Prey_Drive, Sensitivity_Level, Size,
            Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather, Tolerates_Hot_Weather,
            Wanderlust_Potential, Type, Congenital_Ailments, Lifetime_Cost, Longevity_Years,
            Number_of_Congenital_Ailments, Purchase_Price, Food_Costs_Per_Year, Grooming_Frequency })
        return res.status(200).json(dog)
    } catch (error) {
        return res.status(400).json({error: "Dog breed already inserted"})
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
    if (Adapts_Well_to_Apartment_Living !== undefined && Adapts_Well_to_Apartment_Living !== null
        && Adapts_Well_to_Apartment_Living !== "")
        query.Adapts_Well_to_Apartment_Living = Adapts_Well_to_Apartment_Living;
    if (Affectionate_with_Family !== undefined && Affectionate_with_Family !== null
        && Affectionate_with_Family !== "")
        query.Affectionate_with_Family = Affectionate_with_Family;
    if (Dog_Friendly !== undefined && Dog_Friendly !== null && Dog_Friendly !== "")
        query.Dog_Friendly = Dog_Friendly;
    if (Easy_To_Groom !== undefined && Easy_To_Groom !== null && Easy_To_Groom !== "")
        query.Easy_To_Groom = Easy_To_Groom;
    if (Easy_To_Train !== undefined && Easy_To_Train !== null && Easy_To_Train !== "")
        query.Easy_To_Train = Easy_To_Train;
    if (Friendly_Toward_Strangers !== undefined && Friendly_Toward_Strangers !== null
        && Friendly_Toward_Strangers !== "")
        query.Friendly_Toward_Strangers = Friendly_Toward_Strangers;
    if (Incredibly_Kid_Friendly_Dogs !== undefined && Incredibly_Kid_Friendly_Dogs !== null
        && Incredibly_Kid_Friendly_Dogs !== "")
        query.Incredibly_Kid_Friendly_Dogs = Incredibly_Kid_Friendly_Dogs;
    if (Intelligence !== undefined && Intelligence !== null && Intelligence !== "")
        query.Intelligence = Intelligence;
    if (Potential_For_Playfulness !== undefined && Potential_For_Playfulness !== null
        && Potential_For_Playfulness !== "")
        query.Potential_For_Playfulness = Potential_For_Playfulness;
    if (Prey_Drive !== undefined && Prey_Drive !== null && Prey_Drive !== "")
        query.Prey_Drive = Prey_Drive;
    if (Size !== undefined && Size !== null && Size !== "")
        query.Size = Size;
    if (Tendency_To_Bark_Or_Howl !== undefined && Tendency_To_Bark_Or_Howl !== null && Tendency_To_Bark_Or_Howl !== "")
        query.Tendency_To_Bark_Or_Howl = Tendency_To_Bark_Or_Howl;
    if (Tolerates_Being_Alone !== undefined && Tolerates_Being_Alone !== null && Tolerates_Being_Alone !== "")
        query.Tolerates_Being_Alone = Tolerates_Being_Alone;
    if (Tolerates_Cold_Weather !== undefined && Tolerates_Cold_Weather !== null && Tolerates_Cold_Weather !== "")
        query.Tolerates_Cold_Weather = Tolerates_Cold_Weather;
    if (Tolerates_Hot_Weather !== undefined && Tolerates_Hot_Weather !== null && Tolerates_Cold_Weather !== "")
        query.Tolerates_Hot_Weather = Tolerates_Hot_Weather;
    if (Type !== undefined && Type !== null && Type !== "")
        query.Type = Type;
    if (Purchase_Price !== undefined && Purchase_Price !== null && Purchase_Price !== "")
        query.Purchase_Price = {$lte: Purchase_Price};

    const dogs = await Dog.find(query)

    if ((Array.isArray(dogs) && dogs.length === 0)){
        return res.status(404).json({error: "No such dog!"})
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