import express from 'express';
import workoutRoutes from './routes/workouts.js'
import { config } from 'dotenv';
config();


const port = process.env.PORT

const app = express();


// middleware
app.use(express.json());


// routes
app.use('/api/workouts', workoutRoutes);


// listen for requests
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
