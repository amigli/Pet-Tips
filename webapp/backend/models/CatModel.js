const mongoose = require('mongoose')

const Schema = mongoose.Schema

const catSchema = new Schema ({
    Breed: {
        type: String,
        required: true,
        unique: true
    },
    length: {
        type: String,
        required: false,
    },
    origin: {
        type: String,
        required: false,
    },
    min_life_expectancy:{
        type: Number,
        required: false
    },
    max_life_expectancy: {
        type: Number,
        required: false
    },
    min_weight: {
        type: Number,
        required: false
    },
    max_weight: {
        type: Number,
        required: false
    },
    family_friendly: {
        type: Number,
        required: false
    },
    shedding: {
        type: Number,
        required: false
    },
    general_health: {
        type: Number,
        required: false
    },
    playfulness: {
        type: Number,
        required: false
    },
    children_friendly: {
        type: Number,
        required: false
    },
    grooming: {
        type: Number,
        required: false
    },
    intelligence: {
        type: Number,
        required: false
    },
    other_pets_friendly: {
        type: Number,
        required: false
    },
    friendly_toward_strangers: {
        type: Number,
        required: false
    },
    tendency_to_vocalize: {
        type: Number,
        required: false
    }
}, { versionKey: false })

module.exports = mongoose.model("Cat", catSchema)