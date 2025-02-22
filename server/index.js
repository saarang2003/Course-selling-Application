import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import userRoutes from './routes/user.route.js'
import courseRoutes from './routes/course.route.js'
import mediaRoutes from './routes/media.route.js';
import purchaseRoute from './routes/purchaseCourse.route.js'
import courseProgressRoute from './routes/courseProgress.route.js';
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
    methods : "GET , POST ,PUT , DELETE , PATCH",
    credentials:true
}));

app.use('/api/v1/media' , mediaRoutes);
app.use("/api/v1/user" , userRoutes );
app.use('/api/v1/course' , courseRoutes);
app.use('/api/v1/purchase',purchaseRoute );
app.use('/api/v1/progress' , courseProgressRoute);

app.listen(PORT , () =>{
    console.log('listening on port at', PORT);
})