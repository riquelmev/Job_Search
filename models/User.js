import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    email: {
        type:String,
        validate:{
            validator:validator.isEmail,
            message:'please provide a valid email'
        },
        required: [true, 'please provide email'],
        unique: true,
    },
    lastName: {
        type:String,
        default: 'lastName',
        maxLength: 20,
        trim: true,
    },
    password: {
        type:String,
        required: [true, 'please provide password'],
        minLength: 6,
    },
    location: {
        type:String,
        maxLength: 20,
        trim: true,
        default: 'my city',
    },
})

export default mongoose.model('User', UserSchema)