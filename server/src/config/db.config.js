import dns from "dns";
import mongoose from "mongoose";
import {configDotenv} from "dotenv";

configDotenv()

dns.setServers(["8.8.8.8"]);

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB is connected");
}


export default connectDB;