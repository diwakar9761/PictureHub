import express from "express"
import { getCurrentUser, getAllUsers, updateUser } from "../controllers/user.controllers.js";
import isAuth from "../middlewares/isAuth.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const userRoute = express.Router()

userRoute.get("/currentUser", isAuth, getCurrentUser)
userRoute.get("/getAllUsers", isAuth, getAllUsers)
userRoute.patch("/update", isAuth, upload.single("profileImage"), updateUser)

export default userRoute;