import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET, POST, PUT, DELETE'],
        allowedHeaders: ['Content-Type'],
    }
));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(mongoDBURL). then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to MongoDB ${mongoDBURL}`);
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error.message);
});