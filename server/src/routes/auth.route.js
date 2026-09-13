import express from "express";
import {loginUser, registerUser, logoutUser} from '../controllers/auth.controllers.js'

const authRouter = express.Router()

authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)
authRouter.get("/logout", logoutUser)

export default authRouter;