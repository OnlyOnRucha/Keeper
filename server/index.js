import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './models/users.js';

const app = express(); 
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const notes = await UserModel.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/", async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

mongoose.connect("mongodb://localhost:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3001, () => {
            console.log('Server started on port 3001');
        });
    })
    .catch(error => console.error("Error connecting to MongoDB:", error));
