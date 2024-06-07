const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    },
    favourite_dogs:  [{ type: Schema.Types.ObjectId, ref: 'Dog', required: false}],
    favourite_cats: [{ type: Schema.Types.ObjectId, ref: 'Cat', required: false}]
}, {versionKey: false})


// static function for signup --> for standard user
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    // exist @, exists string before @, exists gmail, hotmail, etc, exist .com, .it, etc
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    // min 8 characters, min 1 lower character, min 1 upper character, min 1 number, min 1 symbol
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({email})

    if (exists){
        throw Error('Email is already in use')
    }

    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // create user
    const user = await this.create({email, password: hash})
    console.log('signup', user)
    return user
}

// static function for login
userSchema.statics.login = async function(email, password) {

    // validation
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if (!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match){
        throw Error("Incorrect password")
    }

    return user
}

module.exports = mongoose.model('User', userSchema)