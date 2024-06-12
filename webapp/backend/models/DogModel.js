const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dogSchema = new Schema({
    Breed: {
        type: String,
        required: true,
        unique: true
    },
    Adaptability: {
        type: Number,
        required: false,
    },
    All_Around_Friendliness: {
        type: Number,
        required: false,
    },
    Exercise_Needs: {
        type: Number,
        required: false,
    },
    Health_Grooming: {
        type: Number,
        required: false,
    },
    Trainability: {
        type: Number,
        required: false,
    },
    Adapts_Well_to_Apartment_Living: {
        type: Number,
        required: false,
    },
    Affectionate_with_Family: {
        type: Number,
        required: false,
    },
    Amount_Of_Shedding: {
        type: Number,
        required: false,
    },
    Dog_Friendly: {
        type: Number,
        required: false,
    },
    Drooling_Potential: {
        type: Number,
        required: false,
    },
    Easy_To_Groom: {
        type: Number,
        required: false
    },
    Easy_To_Train: {
        type: Number,
        required: false,
    },
    Energy_Level: {
        type: Number,
        required: false
    },
    Friendly_Toward_Strangers:{
        type: Number,
        required: false
    },
    General_Health:{
        type: Number,
        required: false
    },
    Good_For_Novice_Owners: {
        type: Number,
        required: false
    },
    Incredibly_Kid_Friendly_Dogs: {
        type: Number,
        required: false
    },
    Intelligence: {
        type: Number,
        required: false
    },
    Intensity:{
        type: Number,
        required: false
    },
    Potential_For_Mouthiness: {
        type: Number,
        required: false
    },
    Potential_For_Playfulness:{
      type: Number,
      required: false
    },
    Potential_For_Weight_Gain:{
        type: Number,
        required: false
    },
    Prey_Drive: {
      type: Number,
      required: false
    },
    Sensitivity_Level: {
        type: Number,
        required: false
    },
    Size: {
        type: Number,
        required: false
    },
    Tendency_To_Bark_Or_Howl: {
        type: Number,
        required: false
    },
    Tolerates_Being_Alone: {
        type: Number,
        required: false
    },
    Tolerates_Cold_Weather: {
      type: Number,
      required: false
    },
    Tolerates_Hot_Weather: {
        type: Number,
        required: false
    },
    Wanderlust_Potential : {
        type: Number,
        required: false
    },
    Type : {
        type: String,
        required: false
    },
    Congenital_Ailments: {
        type: String,
        required: false
    },
    Lifetime_Cost : {
        type: Number,
        required: false
    },
    Number_of_Congenital_Ailments : {
        type: Number,
        required: false
    },
    Longevity_Years : {
        type: Number,
        required: false
    },
    Purchase_Price: {
        type: Number,
        required: false
    },
    Food_Costs_Per_Year: {
        type: Number,
        required: false
    },
    Grooming_Frequency: {
        type: String,
        required: false
    }
}, { versionKey: false })

module.exports = mongoose.model("Dog", dogSchema)