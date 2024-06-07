const express = require('express')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

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

module.exports = { loginUser, signupUser }