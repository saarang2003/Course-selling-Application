import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import userRoutes from './routes/user.routes.js'
import courseRoutes from './routes/course.routes.js'
import cookieParser from 'cookie-parser';
import cors from "cors";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api/v1/user" , userRoutes );
app.use('/api/v1/course' , courseRoutes);

app.listen(PORT , () =>{
    console.log('listening on port at', PORT);
})