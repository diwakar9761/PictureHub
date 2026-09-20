import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postImage: {
        type: String,
        required: true 
    },
    postCaption: {
        type: String, 
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, {timestamps: true})

const postModel = mongoose.model("post", postSchema);

export default postModel;