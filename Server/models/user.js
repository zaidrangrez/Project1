import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name :{
        type : String
    },

    email:{
        type : String
    },

    passwordHash: {
        type : String
    },

    isActive : {
        type : Boolean
    },

    role : {
        type : String,
        enum : [customer , admin]
    },

    refreshToken : {
        type : String
    },

    number : {
        type : Number,
        enum : [customer , admin]
    },

    totalSpend:{
        type : Number
    },

    totalOrders : {
        type : Number
    }, 

    loyalPoints :{
        type : Number
    }
})

const User = mongoose.model('user',userSchema); 