import express from "express"
import { createPost, getPosts } from "../controllers/post.controllers.js"
import isAuth from "../middlewares/isAuth.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const postRouter = express.Router()

postRouter.post("/create", isAuth, upload.single("postImage"), createPost)
postRouter.get("/posts", isAuth, getPosts)

export default postRouter;