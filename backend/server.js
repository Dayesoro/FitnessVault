import express from 'express';
import { config } from 'dotenv';
config();


const port = process.env.PORT
const app = express();


// routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
});

// listen for requests
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
