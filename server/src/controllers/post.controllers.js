import postModel from "../models/post.model.js"
import uploadFile from "../config/uploadImage.js"

const createPost = async (req, res) => {
   
    const {postCaption} = req.body
    const uploadedFile = await uploadFile(req.file.buffer, req.file.originalname, "postImage");
    try {
        const createdPost = await postModel.create({
            postImage: uploadedFile.url,
            postCaption,
            createdBy: req.userId
        })

        console.log('created post', createdPost);
        

        if (!createdPost) {
            res.status(400).json({message: "Post not found!"})
        }

        res.status(201).json({message: "Post created successfully!", post: createdPost})
    } catch (error) {
        res.status(400).json({message: "Some error occured while creating the post!", error: error})
    }
}

const getPosts = async (req, res) => {
    const allPosts = await postModel.find().sort({ createdAt: -1 }).populate('createdBy', 'firstName lastName userName profileImage');
    try {
        if (!allPosts) {
            res.status(400).json({message: "Posts not found!"})
        }
        res.status(200).json({message: "Posts fetched successfully!", posts: allPosts})
    } catch (error) {
        res.status(400).json({message: "Error in founding the posts!", error: error})
    }
}

export {createPost, getPosts}