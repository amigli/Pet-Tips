const express = require('express')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");

// create token
const createToken = (_id) => {
    return jwt.sign( {_id}, process.env.SECRET_KEY, { expiresIn: '24h'})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)
        return res.status(200).json({user, token})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


// signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.signup(email, password)
        console.log('signupUser', user)
        const token = createToken(user._id)
        return res.status(200).json({user: user, token})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const saveFavouriteDogById = async (req, res) => {
    const { id } = req.user
    const { idDog } = req.body

    // console.log(id, id_dog)
    if (!mongoose.Types.ObjectId.isValid(idDog)){
        return res.status(400).json({error: "Invalid Dog ID (saveFavouriteDogById)"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {'$addToSet': {favourite_dogs: idDog}}, {new: true})

    if (!user){
        return res.status(404).json({error: "No such user (saveFavoriteDogById)"})
    }

    return res.status(200).json(user)
}

const saveFavouriteCatById = async (req, res) => {
    const { id } = req.user
    const { idCat } = req.body

    if (!mongoose.Types.ObjectId.isValid(idCat)){
        return res.status(400).json({error: "Invalid Cat ID (saveFavouriteCatById)"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {'$addToSet': {favourite_cats: idCat}}, {new: true})

    if (!user){
        return res.status(404).json({error: "No such user (saveFavouriteCatById)"})
    }

    return res.status(200).json(user)
}

const deleteFavouriteDogById = async (req, res) => {
    const { id } = req.user
    const { idDog } = req.params

    if (!mongoose.Types.ObjectId.isValid(idDog)){
        return res.status(400).json({error: "Invalid Dog ID (deleteFavouriteDogById)"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {'$pull': {favourite_dogs: idDog}}, {new: true})

    if (!user){
        return res.status(404).json({error: "No such user (deleteFavoriteDogById)"})
    }

    return res.status(200).json(user)
}

const deleteFavouriteCatById = async (req, res) => {
    const { id } = req.user
    const { idCat } = req.params

    if (!mongoose.Types.ObjectId.isValid(idCat)){
        return res.status(400).json({error: "Invalid Cat ID (deleteFavouriteCatById)"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {'$pull': {favourite_cats: idCat}}, {new: true})

    if (!user){
        return res.status(404).json({error: "No such user (deleteFavoriteCatById)"})
    }

    return res.status(200).json(user)
}

module.exports = { loginUser, signupUser, saveFavouriteDogById, saveFavouriteCatById,
    deleteFavouriteDogById, deleteFavouriteCatById}