import userModel from "../models/user.model.js";
import uploadFile from "../config/uploadImage.js";

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

const updateUser = async (req, res) => {
    const {firstName, lastName, bio} = req.body;

    try {
        let user;
        if (req.file) {
            const uploadedFile = await uploadFile(req.file.buffer, req.file.originalname, "profileImage");
            user = await userModel.findOneAndUpdate({_id: req.userId}, { firstName: firstName, lastName: lastName, bio: bio, profileImage: uploadedFile.url }, {new: true});
        } else {
            user = await userModel.findOneAndUpdate({_id: req.userId}, { firstName: firstName, lastName: lastName, bio: bio }, {new: true});
        }

        if (!user) {
            res.status(400).json({message: "No users found!"});
        }

        res.status(200).json({message: "User updated successfully!", user: user})        
    } catch (error) {
        res.status(400).json({message: "Error in updating the user!", error: error});
    }
}

export {getCurrentUser, getAllUsers, updateUser}