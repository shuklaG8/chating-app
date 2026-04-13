import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// routes
import userRoute from './routes/userRoute.js';
import messageRoute from './routes/messageRoute.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});