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
    const {
        Breed, All_Around_Friendliness, Adaptability, Exercise_Needs, Health_Grooming, Trainability, Adapts_Well_to_Apartment_Living,
        Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly, Drooling_Potential, Easy_To_Groom, Easy_To_Train,
        Energy_Level, Friendly_Toward_Strangers, General_Health, Good_For_Novice_Owners, Incredibly_Kid_Friendly_Dogs,
        Intelligence, Intensity, Potential_For_Mouthiness, Potential_For_Playfulness, Potential_For_Weight_Gain,
        Prey_Drive, Sensitivity_Level, Size, Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather,
        Tolerates_Hot_Weather, Wanderlust_Potential, Type, Congenital_Ailments, Lifetime_Cost, Longevity_Years,
        Number_of_Congenital_Ailments, Purchase_Price, Food_Costs_Per_Year, Grooming_Frequency
    } = req.body;

    const emptyFields = []

    if (!Breed) {
        emptyFields.push('Breed')
    }

    if (emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill the Breed field', emptyFields})
    }

    const dogWithoutNull = {}

    if (Breed !== undefined && Breed !== null && Breed !== "")
        dogWithoutNull.Breed = Breed;
    if (All_Around_Friendliness !== undefined && All_Around_Friendliness !== null && All_Around_Friendliness !== "")
        dogWithoutNull.All_Around_Friendliness = All_Around_Friendliness;
    if (Adaptability !== undefined && Adaptability !== null && Adaptability !== "")
        dogWithoutNull.Adaptability = Adaptability;
    if (Exercise_Needs !== undefined && Exercise_Needs !== null && Exercise_Needs !== "")
        dogWithoutNull.Exercise_Needs = Exercise_Needs;
    if (Health_Grooming !== undefined && Health_Grooming !== null && Health_Grooming !== "")
        dogWithoutNull.Health_Grooming = Health_Grooming;
    if (Trainability !== undefined && Trainability !== null && Trainability !== "")
        dogWithoutNull.Trainability = Trainability;
    if (Adapts_Well_to_Apartment_Living !== undefined && Adapts_Well_to_Apartment_Living !== null && Adapts_Well_to_Apartment_Living !== "")
        dogWithoutNull.Adapts_Well_to_Apartment_Living = Adapts_Well_to_Apartment_Living;
    if (Affectionate_with_Family !== undefined && Affectionate_with_Family !== null && Affectionate_with_Family !== "")
        dogWithoutNull.Affectionate_with_Family = Affectionate_with_Family;
    if (Amount_Of_Shedding !== undefined && Amount_Of_Shedding !== null && Amount_Of_Shedding !== "")
        dogWithoutNull.Amount_Of_Shedding = Amount_Of_Shedding;
    if (Dog_Friendly !== undefined && Dog_Friendly !== null && Dog_Friendly !== "")
        dogWithoutNull.Dog_Friendly = Dog_Friendly;
    if (Drooling_Potential !== undefined && Drooling_Potential !== null && Drooling_Potential !== "")
        dogWithoutNull.Drooling_Potential = Drooling_Potential;
    if (Easy_To_Groom !== undefined && Easy_To_Groom !== null && Easy_To_Groom !== "")
        dogWithoutNull.Easy_To_Groom = Easy_To_Groom;
    if (Easy_To_Train !== undefined && Easy_To_Train !== null && Easy_To_Train !== "")
        dogWithoutNull.Easy_To_Train = Easy_To_Train;
    if (Energy_Level !== undefined && Energy_Level !== null && Energy_Level !== "")
        dogWithoutNull.Energy_Level = Energy_Level;
    if (Friendly_Toward_Strangers !== undefined && Friendly_Toward_Strangers !== null && Friendly_Toward_Strangers !== "")
        dogWithoutNull.Friendly_Toward_Strangers = Friendly_Toward_Strangers;
    if (General_Health !== undefined && General_Health !== null && General_Health !== "")
        dogWithoutNull.General_Health = General_Health;
    if (Good_For_Novice_Owners !== undefined && Good_For_Novice_Owners !== null && Good_For_Novice_Owners !== "")
        dogWithoutNull.Good_For_Novice_Owners = Good_For_Novice_Owners;
    if (Incredibly_Kid_Friendly_Dogs !== undefined && Incredibly_Kid_Friendly_Dogs !== null && Incredibly_Kid_Friendly_Dogs !== "")
        dogWithoutNull.Incredibly_Kid_Friendly_Dogs = Incredibly_Kid_Friendly_Dogs;
    if (Intelligence !== undefined && Intelligence !== null && Intelligence !== "")
        dogWithoutNull.Intelligence = Intelligence;
    if (Intensity !== undefined && Intensity !== null && Intensity !== "")
        dogWithoutNull.Intensity = Intensity;
    if (Potential_For_Mouthiness !== undefined && Potential_For_Mouthiness !== null && Potential_For_Mouthiness !== "")
        dogWithoutNull.Potential_For_Mouthiness = Potential_For_Mouthiness;
    if (Potential_For_Playfulness !== undefined && Potential_For_Playfulness !== null && Potential_For_Playfulness !== "")
        dogWithoutNull.Potential_For_Playfulness = Potential_For_Playfulness;
    if (Potential_For_Weight_Gain !== undefined && Potential_For_Weight_Gain !== null && Potential_For_Weight_Gain !== "")
        dogWithoutNull.Potential_For_Weight_Gain = Potential_For_Weight_Gain;
    if (Prey_Drive !== undefined && Prey_Drive !== null && Prey_Drive !== "")
        dogWithoutNull.Prey_Drive = Prey_Drive;
    if (Sensitivity_Level !== undefined && Sensitivity_Level !== null && Sensitivity_Level !== "")
        dogWithoutNull.Sensitivity_Level = Sensitivity_Level;
    if (Size !== undefined && Size !== null && Size !== "")
        dogWithoutNull.Size = Size;
    if (Tendency_To_Bark_Or_Howl !== undefined && Tendency_To_Bark_Or_Howl !== null && Tendency_To_Bark_Or_Howl !== "")
        dogWithoutNull.Tendency_To_Bark_Or_Howl = Tendency_To_Bark_Or_Howl;
    if (Tolerates_Being_Alone !== undefined && Tolerates_Being_Alone !== null && Tolerates_Being_Alone !== "")
        dogWithoutNull.Tolerates_Being_Alone = Tolerates_Being_Alone;
    if (Tolerates_Cold_Weather !== undefined && Tolerates_Cold_Weather !== null && Tolerates_Cold_Weather !== "")
        dogWithoutNull.Tolerates_Cold_Weather = Tolerates_Cold_Weather;
    if (Tolerates_Hot_Weather !== undefined && Tolerates_Hot_Weather !== null && Tolerates_Hot_Weather !== "")
        dogWithoutNull.Tolerates_Hot_Weather = Tolerates_Hot_Weather;
    if (Wanderlust_Potential !== undefined && Wanderlust_Potential !== null && Wanderlust_Potential !== "")
        dogWithoutNull.Wanderlust_Potential = Wanderlust_Potential;
    if (Type !== undefined && Type !== null && Type !== "")
        dogWithoutNull.Type = Type;
    if (Congenital_Ailments !== undefined && Congenital_Ailments !== null && Congenital_Ailments !== "")
        dogWithoutNull.Congenital_Ailments = Congenital_Ailments;
    if (Lifetime_Cost !== undefined && Lifetime_Cost !== null && Lifetime_Cost !== "")
        dogWithoutNull.Lifetime_Cost = Lifetime_Cost;
    if (Longevity_Years !== undefined && Longevity_Years !== null && Longevity_Years !== "")
        dogWithoutNull.Longevity_Years = Longevity_Years;
    if (Number_of_Congenital_Ailments !== undefined && Number_of_Congenital_Ailments !== null && Number_of_Congenital_Ailments !== "")
        dogWithoutNull.Number_of_Congenital_Ailments = Number_of_Congenital_Ailments;
    if (Purchase_Price !== undefined && Purchase_Price !== null && Purchase_Price !== "")
        dogWithoutNull.Purchase_Price = Purchase_Price;
    if (Food_Costs_Per_Year !== undefined && Food_Costs_Per_Year !== null && Food_Costs_Per_Year !== "")
        dogWithoutNull.Food_Costs_Per_Year = Food_Costs_Per_Year;
    if (Grooming_Frequency !== undefined && Grooming_Frequency !== null && Grooming_Frequency !== "")
        dogWithoutNull.Grooming_Frequency = Grooming_Frequency;

    try {
        const dog = await Dog.create(dogWithoutNull);
        return res.status(200).json(dog);
    } catch (error) {
        return res.status(400).json({ error: "Dog breed already inserted" });
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
        return res.status(400).json({error: "Invalid Dog ID (updateDogById)"})
    }

    const {
        All_Around_Friendliness, Adaptability, Exercise_Needs, Health_Grooming, Trainability, Adapts_Well_to_Apartment_Living,
        Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly, Drooling_Potential, Easy_To_Groom, Easy_To_Train,
        Energy_Level, Friendly_Toward_Strangers, General_Health, Good_For_Novice_Owners, Incredibly_Kid_Friendly_Dogs,
        Intelligence, Intensity, Potential_For_Mouthiness, Potential_For_Playfulness, Potential_For_Weight_Gain,
        Prey_Drive, Sensitivity_Level, Size, Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather,
        Tolerates_Hot_Weather, Wanderlust_Potential, Type, Congenital_Ailments, Lifetime_Cost, Longevity_Years,
        Number_of_Congenital_Ailments, Purchase_Price, Food_Costs_Per_Year, Grooming_Frequency
    } = req.body;

    const setFields = {};
    const unsetFields = {};

    if (All_Around_Friendliness !== undefined && All_Around_Friendliness !== null && All_Around_Friendliness !== "")
        setFields.All_Around_Friendliness = All_Around_Friendliness;
    else unsetFields.All_Around_Friendliness = "";

    if (Adaptability !== undefined && Adaptability !== null && Adaptability !== "")
        setFields.Adaptability = Adaptability;
    else unsetFields.Adaptability = "";

    if (Exercise_Needs !== undefined && Exercise_Needs !== null && Exercise_Needs !== "")
        setFields.Exercise_Needs = Exercise_Needs;
    else unsetFields.Exercise_Needs = "";

    if (Health_Grooming !== undefined && Health_Grooming !== null && Health_Grooming !== "")
        setFields.Health_Grooming = Health_Grooming;
    else unsetFields.Health_Grooming = "";

    if (Trainability !== undefined && Trainability !== null && Trainability !== "")
        setFields.Trainability = Trainability;
    else unsetFields.Trainability = "";

    if (Adapts_Well_to_Apartment_Living !== undefined && Adapts_Well_to_Apartment_Living !== null && Adapts_Well_to_Apartment_Living !== "")
        setFields.Adapts_Well_to_Apartment_Living = Adapts_Well_to_Apartment_Living;
    else unsetFields.Adapts_Well_to_Apartment_Living = "";

    if (Affectionate_with_Family !== undefined && Affectionate_with_Family !== null && Affectionate_with_Family !== "")
        setFields.Affectionate_with_Family = Affectionate_with_Family;
    else unsetFields.Affectionate_with_Family = "";

    if (Amount_Of_Shedding !== undefined && Amount_Of_Shedding !== null && Amount_Of_Shedding !== "")
        setFields.Amount_Of_Shedding = Amount_Of_Shedding;
    else unsetFields.Amount_Of_Shedding = "";

    if (Dog_Friendly !== undefined && Dog_Friendly !== null && Dog_Friendly !== "")
        setFields.Dog_Friendly = Dog_Friendly;
    else unsetFields.Dog_Friendly = "";

    if (Drooling_Potential !== undefined && Drooling_Potential !== null && Drooling_Potential !== "")
        setFields.Drooling_Potential = Drooling_Potential;
    else unsetFields.Drooling_Potential = "";

    if (Easy_To_Groom !== undefined && Easy_To_Groom !== null && Easy_To_Groom !== "")
        setFields.Easy_To_Groom = Easy_To_Groom;
    else unsetFields.Easy_To_Groom = "";

    if (Easy_To_Train !== undefined && Easy_To_Train !== null && Easy_To_Train !== "")
        setFields.Easy_To_Train = Easy_To_Train;
    else unsetFields.Easy_To_Train = "";

    if (Energy_Level !== undefined && Energy_Level !== null && Energy_Level !== "")
        setFields.Energy_Level = Energy_Level;
    else unsetFields.Energy_Level = "";

    if (Friendly_Toward_Strangers !== undefined && Friendly_Toward_Strangers !== null && Friendly_Toward_Strangers !== "")
        setFields.Friendly_Toward_Strangers = Friendly_Toward_Strangers;
    else unsetFields.Friendly_Toward_Strangers = "";

    if (General_Health !== undefined && General_Health !== null && General_Health !== "")
        setFields.General_Health = General_Health;
    else unsetFields.General_Health = "";

    if (Good_For_Novice_Owners !== undefined && Good_For_Novice_Owners !== null && Good_For_Novice_Owners !== "")
        setFields.Good_For_Novice_Owners = Good_For_Novice_Owners;
    else unsetFields.Good_For_Novice_Owners = "";

    if (Incredibly_Kid_Friendly_Dogs !== undefined && Incredibly_Kid_Friendly_Dogs !== null && Incredibly_Kid_Friendly_Dogs !== "")
        setFields.Incredibly_Kid_Friendly_Dogs = Incredibly_Kid_Friendly_Dogs;
    else unsetFields.Incredibly_Kid_Friendly_Dogs = "";

    if (Intelligence !== undefined && Intelligence !== null && Intelligence !== "")
        setFields.Intelligence = Intelligence;
    else unsetFields.Intelligence = "";

    if (Intensity !== undefined && Intensity !== null && Intensity !== "")
        setFields.Intensity = Intensity;
    else unsetFields.Intensity = "";

    if (Potential_For_Mouthiness !== undefined && Potential_For_Mouthiness !== null && Potential_For_Mouthiness !== "")
        setFields.Potential_For_Mouthiness = Potential_For_Mouthiness;
    else unsetFields.Potential_For_Mouthiness = "";

    if (Potential_For_Playfulness !== undefined && Potential_For_Playfulness !== null && Potential_For_Playfulness !== "")
        setFields.Potential_For_Playfulness = Potential_For_Playfulness;
    else unsetFields.Potential_For_Playfulness = "";

    if (Potential_For_Weight_Gain !== undefined && Potential_For_Weight_Gain !== null && Potential_For_Weight_Gain !== "")
        setFields.Potential_For_Weight_Gain = Potential_For_Weight_Gain;
    else unsetFields.Potential_For_Weight_Gain = "";

    if (Prey_Drive !== undefined && Prey_Drive !== null && Prey_Drive !== "")
        setFields.Prey_Drive = Prey_Drive;
    else unsetFields.Prey_Drive = "";

    if (Sensitivity_Level !== undefined && Sensitivity_Level !== null && Sensitivity_Level !== "")
        setFields.Sensitivity_Level = Sensitivity_Level;
    else unsetFields.Sensitivity_Level = "";

    if (Size !== undefined && Size !== null && Size !== "")
        setFields.Size = Size;
    else unsetFields.Size = "";

    if (Tendency_To_Bark_Or_Howl !== undefined && Tendency_To_Bark_Or_Howl !== null && Tendency_To_Bark_Or_Howl !== "")
        setFields.Tendency_To_Bark_Or_Howl = Tendency_To_Bark_Or_Howl;
    else unsetFields.Tendency_To_Bark_Or_Howl = "";

    if (Tolerates_Being_Alone !== undefined && Tolerates_Being_Alone !== null && Tolerates_Being_Alone !== "")
        setFields.Tolerates_Being_Alone = Tolerates_Being_Alone;
    else unsetFields.Tolerates_Being_Alone = "";

    if (Tolerates_Cold_Weather !== undefined && Tolerates_Cold_Weather !== null && Tolerates_Cold_Weather !== "")
        setFields.Tolerates_Cold_Weather = Tolerates_Cold_Weather;
    else unsetFields.Tolerates_Cold_Weather = "";

    if (Tolerates_Hot_Weather !== undefined && Tolerates_Hot_Weather !== null && Tolerates_Hot_Weather !== "")
        setFields.Tolerates_Hot_Weather = Tolerates_Hot_Weather;
    else unsetFields.Tolerates_Hot_Weather = "";

    if (Wanderlust_Potential !== undefined && Wanderlust_Potential !== null && Wanderlust_Potential !== "")
        setFields.Wanderlust_Potential = Wanderlust_Potential;
    else unsetFields.Wanderlust_Potential = "";

    if (Type !== undefined && Type !== null && Type !== "")
        setFields.Type = Type;
    else unsetFields.Type = "";

    if (Congenital_Ailments !== undefined && Congenital_Ailments !== null && Congenital_Ailments !== "")
        setFields.Congenital_Ailments = Congenital_Ailments;
    else unsetFields.Congenital_Ailments = "";

    if (Lifetime_Cost !== undefined && Lifetime_Cost !== null && Lifetime_Cost !== "")
        setFields.Lifetime_Cost = Lifetime_Cost;
    else unsetFields.Lifetime_Cost = "";

    if (Longevity_Years !== undefined && Longevity_Years !== null && Longevity_Years !== "")
        setFields.Longevity_Years = Longevity_Years;
    else unsetFields.Longevity_Years = "";

    if (Number_of_Congenital_Ailments !== undefined && Number_of_Congenital_Ailments !== null && Number_of_Congenital_Ailments !== "")
        setFields.Number_of_Congenital_Ailments = Number_of_Congenital_Ailments;
    else unsetFields.Number_of_Congenital_Ailments = "";

    if (Purchase_Price !== undefined && Purchase_Price !== null && Purchase_Price !== "")
        setFields.Purchase_Price = Purchase_Price;
    else unsetFields.Purchase_Price = "";

    if (Food_Costs_Per_Year !== undefined && Food_Costs_Per_Year !== null && Food_Costs_Per_Year !== "")
        setFields.Food_Costs_Per_Year = Food_Costs_Per_Year;
    else unsetFields.Food_Costs_Per_Year = "";

    if (Grooming_Frequency !== undefined && Grooming_Frequency !== null && Grooming_Frequency !== "")
        setFields.Grooming_Frequency = Grooming_Frequency;
    else unsetFields.Grooming_Frequency = "";

    const update = {};
    if (Object.keys(setFields).length > 0) update.$set = setFields;
    if (Object.keys(unsetFields).length > 0) update.$unset = unsetFields;

    const dog = await Dog.findOneAndUpdate({ _id: id }, update, { new: true });

    if (!dog){
        return res.status(404).json({error: "No such dog (updateDogById)"})
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
    if (Tolerates_Hot_Weather !== undefined && Tolerates_Hot_Weather !== null && Tolerates_Hot_Weather !== "")
        query.Tolerates_Hot_Weather = Tolerates_Hot_Weather;
    if (Type !== undefined && Type !== null && Type !== "")
        query.Type = Type;
    if (Purchase_Price !== undefined && Purchase_Price !== null && Purchase_Price !== "")
        query.Purchase_Price = {$lte: Purchase_Price};

    const dogs = await Dog.find(query).sort({Breed: 1})

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