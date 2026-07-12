import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.get("/",(req,res)=>{
    res.json({
        message:"VESTRA API Running Successfully"
    });
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});
