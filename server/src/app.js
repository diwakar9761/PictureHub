import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.config.js";
import authRouter from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

// DB connection
connectDB();

const app = express()

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user", userRoute)


export default app

