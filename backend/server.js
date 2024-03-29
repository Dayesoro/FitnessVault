import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.js';
import userRoutes from './routes/user.js';
import cors from 'cors';
import { config } from 'dotenv';
config();


const port = process.env.PORT;

const app = express();
const allowedDomains = ["https://fitnessvault.netlify.app", "http://localhost:3000"]



// middleware
app.use(express.json());
app.use(cors({
    origin: allowedDomains
}))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

const main = async () => {
    try {
        // Connect to the database
        console.log(`Connecting to DB`);
        await mongoose.connect(process.env.MONGO_URI);

        // Start listening for requests
        app.listen(port, () => {
            console.log(`Connected to DB & listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
}

main();


