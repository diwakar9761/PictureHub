import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const getCurrentUser = async (req, res) => {
    try {
        const currentUser = await userModel.findOne({
            _id: req.userId
        }).select("-password")
        if (!currentUser) {
            res.status(400).json({message: "User not found!"});
        }
        res.status(200).json({message: "Current user details fetched successfully!", user: currentUser});
    } catch (error) {
        res.status(400).json({message: "Error for get current user"});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find().select("-password");
        if (!allUsers) {
            res.status(400).json({message: "No users found!"});
        }
        res.status(200).json({message: "Users fetched successfully!", users: allUsers})
    } catch (error) {
        res.status(400).json({message: "Error in fetching all users"});
    }
}

export {getCurrentUser, getAllUsers}