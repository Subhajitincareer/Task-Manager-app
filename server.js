import { connectDB } from './config/db.js';
import express from "express"
import bodyParser from 'body-parser';
import  {Router as authRouter } from './routes/authRoutes.js';
import { Router as taskRouter } from "./routes/taskRoutes.js";
import cors from 'cors';
const app = express();

// Middleware to parse JSON request bodies

app.use(cors());

connectDB();
app.use(express.json());


app.use(bodyParser.json());
app.use("/api/auth", authRouter)
app.use('/api/task', taskRouter)



app.listen(
    process.env.PORT || 3000,
    () => console.log('Server is running on port 3000')
 );

