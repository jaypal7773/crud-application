const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxLength: 50,
        require: true,
    },
    email:{
        type: String,
        maxLength: 50,
        require: true,
    },
    dob: {
        type: Date,
        default: Date,
    },
    status: {
        type: Boolean,
        default: true,
    },
    gender: {
        type: String,
        enum:["M" , "F" , "O"]
    }
})

module.exports = mongoose.model("user" , userSchema)