import userModel from "../models/user.model.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

// Register
const registerUser = async (req, res) => {
    
    try {
        const { firstName, lastName, email, password, userName } = req.body;

        const isEmailExists = await userModel.findOne({
            $or: [
                {email},
                {userName}
            ]
        })

        if (isEmailExists) {
            return res.status(409).json({message: "Username or Email already exists"})
        }

        // Hashing the password with bcrypt
        const pHash = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
            firstName,
            lastName,
            email,
            password: pHash,
            userName
        })

        if (newUser) {
            return res.status(201).json({message: "User registered successfully", user: newUser})
        }   
    } catch (error) {
        return res.status(400).json({message: "Error creating new user!"})
    }
}


// Login
const loginUser = async (req, res) => {
    try {
    const {email, userName, password} = req.body;

        // check if user exists with email or username
        const loginUser = await userModel.findOne({
            $or: [
                { email },
                { userName }
            ]
        })

        if (!loginUser) {
            return res.status(409).json({message: "Email or password is not correct!"})
        }

        // Check if password for login user is correct or not!
        const isValidPassword = await bcrypt.compare(password, loginUser.password)

        if (!isValidPassword) {
            return res.status(409).json({message: "Email or password is not correct!"})
        }

        // Create token
        const token = jwt.sign({ id: loginUser._id }, process.env.JWT_SECRET);

        // Save token to cookie
        res.cookie('token', token)

        return res.status(200).json({message: "User is logged in successfully!", user: loginUser})   
    } catch (error) {
        return res.status(400).json({message: "Logged in error!"})   
    }
}


// logout
const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message: "User has been logged out successfully!"});
    } catch (error) {
        return res.status(400).json({message: "Logout error!"});
    }
}

export {registerUser, loginUser, logoutUser}