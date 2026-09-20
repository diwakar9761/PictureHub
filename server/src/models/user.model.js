import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: "Delhi, India"
    },
    profileImage: {
        type: String,
        default: ""
    },
    bio: {
        type: String
    }
})

const userModel = mongoose.model("user", userSchema)

export default userModel;