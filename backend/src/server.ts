import express, { type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import taskRoutes from './routes/employeesTask.js'
import authRoutes from './routes/auth.js';
import { connectDB } from './config/connectDB.js';
import cookieParser from "cookie-parser";
import { errorHandler } from './middleware/errorHandler.js';
dotenv.config();


const app = express();

app.use(helmet());
const origin = ['http://localhost:5173', 'https://indomitech-assignment.vercel.app']
app.use(cors({
    origin: origin,
    credentials: true,
}));

app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use('/api', limiter);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/checkup', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', message: "server is Workinggg" });
});
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on Port : ${PORT}`);
    });
};

startServer();

export default app;