const Cat = require('../models/CatModel')
const mongoose = require('mongoose')

// GET ALL CATS
const getAllCats = async (req, res) => {
    const cats = await Cat.find({}).sort({Breed: 1})
    return res.status(200).json(cats)
}


// GET A SINGLE CAT
const getCatById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Cat ID (getCatById)"})
    }

    const cat = await Cat.findById(id)

    if (!cat){
        return res.status(404).json({error: "No such cat (getCatById)"})
    }

    return res.status(200).json(cat)
}


// INSERT A SINGLE CAT
const insertCat = async (req, res) => {
    const { Breed, length, origin, min_life_expectancy, max_life_expectancy, min_weight, max_weight,
        family_friendly, shedding, general_health, playfulness, children_friendly, grooming, intelligence,
        other_pets_friendly, friendly_toward_strangers, tendency_to_vocalize } = req.body;

    const emptyFields = []

    if (!Breed) {
        emptyFields.push('Breed')
    }

    if (emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill the Breed field', emptyFields})
    }

    const catWithoutNull = {}

    if (Breed !== undefined && Breed !== null && Breed !== "")
        catWithoutNull.Breed = Breed
    if (length !== undefined && length !== null && length !== "")
        catWithoutNull.length = length
    if (origin !== undefined && origin !== null && origin !== "")
        catWithoutNull.origin = origin
    if (min_life_expectancy !== undefined && min_life_expectancy !== null && min_life_expectancy !== "")
        catWithoutNull.min_life_expectancy = min_life_expectancy
    if (max_life_expectancy !== undefined && max_life_expectancy !== null && max_life_expectancy !== "")
        catWithoutNull.max_life_expectancy = max_life_expectancy
    if (min_weight !== undefined && min_weight !== null && min_weight !== "")
        catWithoutNull.min_weight = min_weight
    if (max_weight !== undefined && max_weight !== null && max_weight !== "")
        catWithoutNull.max_weight = max_weight
    if (family_friendly !== undefined && family_friendly !== null && family_friendly !== "")
        catWithoutNull.family_friendly = family_friendly;
    if (shedding !== undefined && shedding !== null && shedding !== "")
        catWithoutNull.shedding = shedding;
    if (general_health !== undefined && general_health !== null && general_health !== "")
        catWithoutNull.general_health = general_health;
    if (playfulness !== undefined && playfulness !== null && playfulness !== "")
        catWithoutNull.playfulness = playfulness;
    if (children_friendly !== undefined && children_friendly !== null && children_friendly !== "")
        catWithoutNull.children_friendly = children_friendly;
    if (grooming !== undefined && grooming !== null && grooming !== "")
        catWithoutNull.grooming = grooming;
    if (intelligence !== undefined && intelligence !== null && intelligence !== "")
        catWithoutNull.intelligence = intelligence;
    if (other_pets_friendly !== undefined && other_pets_friendly !== null && other_pets_friendly !== "")
        catWithoutNull.other_pets_friendly = other_pets_friendly;
    if (friendly_toward_strangers !== undefined && friendly_toward_strangers !== null && friendly_toward_strangers !== "")
        catWithoutNull.friendly_toward_strangers = friendly_toward_strangers;
    if (tendency_to_vocalize !== undefined && tendency_to_vocalize !== null && tendency_to_vocalize !== "")
        catWithoutNull.tendency_to_vocalize = tendency_to_vocalize;

    try {
        const cat = await Cat.create(catWithoutNull)
        return res.status(200).json(cat)
    } catch (error) {
        return res.status(400).json({error: "Cat breed already inserted"})
    }
}


// DELETE A SINGLE CAT
const deleteCatById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Cat ID (deleteCatById)"})
    }

    const cat = await Cat.findOneAndDelete({_id: id})

    if (!cat){
        return res.status(404).json({error: "No such cat (deleteCatById)"})
    }

    return res.status(200).json(cat)
}


// UPDATE A SINGLE CAT
const updateCatById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Cat ID (updateCatById)"})
    }

    const { length, origin, min_life_expectancy, max_life_expectancy, min_weight, max_weight,
        family_friendly, shedding, general_health, playfulness, children_friendly, grooming, intelligence,
        other_pets_friendly, friendly_toward_strangers, tendency_to_vocalize } = req.body;

    const setFields = {}
    const unsetFields = {}

    if (length !== undefined && length !== null && length !== "")
        setFields.length = length;
    else unsetFields.length = "";

    if (origin !== undefined && origin !== null && origin !== "")
        setFields.origin = origin;
    else unsetFields.origin = "";

    if (min_life_expectancy !== undefined && min_life_expectancy !== null && min_life_expectancy !== "")
        setFields.min_life_expectancy = min_life_expectancy;
    else unsetFields.min_life_expectancy = "";

    if (max_life_expectancy !== undefined && max_life_expectancy !== null && max_life_expectancy !== "")
        setFields.max_life_expectancy = max_life_expectancy;
    else unsetFields.max_life_expectancy = "";

    if (min_weight !== undefined && min_weight !== null && min_weight !== "")
        setFields.min_weight = min_weight;
    else unsetFields.min_weight = "";

    if (max_weight !== undefined && max_weight !== null && max_weight !== "")
        setFields.max_weight = max_weight;
    else unsetFields.max_weight = "";

    if (family_friendly !== undefined && family_friendly !== null && family_friendly !== "")
        setFields.family_friendly = family_friendly;
    else unsetFields.family_friendly = "";

    if (shedding !== undefined && shedding !== null && shedding !== "")
        setFields.shedding = shedding;
    else unsetFields.shedding = "";

    if (general_health !== undefined && general_health !== null && general_health !== "")
        setFields.general_health = general_health;
    else unsetFields.general_health = "";

    if (playfulness !== undefined && playfulness !== null && playfulness !== "")
        setFields.playfulness = playfulness;
    else unsetFields.playfulness = "";

    if (children_friendly !== undefined && children_friendly !== null && children_friendly !== "")
        setFields.children_friendly = children_friendly;
    else unsetFields.children_friendly = "";

    if (grooming !== undefined && grooming !== null && grooming !== "")
        setFields.grooming = grooming;
    else unsetFields.grooming = "";

    if (intelligence !== undefined && intelligence !== null && intelligence !== "")
        setFields.intelligence = intelligence;
    else unsetFields.intelligence = "";

    if (other_pets_friendly !== undefined && other_pets_friendly !== null && other_pets_friendly !== "")
        setFields.other_pets_friendly = other_pets_friendly;
    else unsetFields.other_pets_friendly = "";

    if (friendly_toward_strangers !== undefined && friendly_toward_strangers !== null && friendly_toward_strangers !== "")
        setFields.friendly_toward_strangers = friendly_toward_strangers;
    else unsetFields.friendly_toward_strangers = "";

    if (tendency_to_vocalize !== undefined && tendency_to_vocalize !== null && tendency_to_vocalize !== "")
        setFields.tendency_to_vocalize = tendency_to_vocalize;
    else unsetFields.tendency_to_vocalize = "";

    const update = {};
    if (Object.keys(setFields).length > 0) update.$set = setFields;
    if (Object.keys(unsetFields).length > 0) update.$unset = unsetFields;

    const cat = await Cat.findOneAndUpdate({ _id: id }, update, { new: true });

    if (!cat){
        return res.status(404).json({error: "No such cat (updateCatById)"})
    }

    return res.status(200).json(cat)
}


// QUERY
const filterCatByAttributes = async (req, res) => {
    const {family_friendly, playfulness, children_friendly, grooming, intelligence, other_pets_friendly,
        friendly_toward_strangers, tendency_to_vocalize} = req.body;

    const query = {};

    if (family_friendly !== undefined && family_friendly !== null && family_friendly !== "")
        query.family_friendly = family_friendly;
    if (playfulness !== undefined && playfulness !== null && playfulness !== "")
        query.playfulness = playfulness;
    if (children_friendly !== undefined && children_friendly !== null && children_friendly !== "")
        query.children_friendly = children_friendly;
    if (grooming !== undefined && grooming !== null && grooming !== "")
        query.grooming = grooming;
    if (intelligence !== undefined && intelligence !== null && intelligence !== "")
        query.intelligence = intelligence;
    if (other_pets_friendly !== undefined && other_pets_friendly !== null && other_pets_friendly !== "")
        query.other_pets_friendly = other_pets_friendly;
    if (friendly_toward_strangers !== undefined && friendly_toward_strangers !== null && friendly_toward_strangers !== "")
        query.friendly_toward_strangers = friendly_toward_strangers;
    if (tendency_to_vocalize !== undefined && tendency_to_vocalize !== null && tendency_to_vocalize !== "")
        query.tendency_to_vocalize = tendency_to_vocalize;

    const cats = await Cat.find(query).sort({Breed: 1})

    if ((Array.isArray(cats) && cats.length === 0)){
        return res.status(404).json({error: "No such cat!"})
    }

    return res.status(200).json(cats)
}

module.exports = {
    getAllCats,
    getCatById,
    insertCat,
    deleteCatById,
    updateCatById,
    filterCatByAttributes
}