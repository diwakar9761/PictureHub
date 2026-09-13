import express from "express"
import { getCurrentUser, getAllUsers } from "../controllers/user.controllers.js";
import isAuth from "../middlewares/isAuth.js";

const userRoute = express.Router()

userRoute.get("/currentUser", isAuth, getCurrentUser)
userRoute.get("/getAllUsers", isAuth, getAllUsers)

export default userRoute;