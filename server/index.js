import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './models/users.js';
import SignUpModel from './models/sign.js';


const app = express(); 
app.use(cors());
app.use(express.json()); //inbuilt express middleware to access our json data in form of an object


//sign-up route
app.post("/sign-up", async (req, res) => {
    try {
        const newUser = await SignUpModel.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//log in route
app.post("/log-in", async (req, res) => {
    try {
        const {email, password} = await (req.body);
        SignUpModel.findOne({email: email})
        .then(user => {
            if(user) {
                if(user.password === password){
                res.json("Success!!")
                } else {
                res.json("The password is incorrect.")
                }
            } else {
                res.json("No record found, register now!")
            }
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//creating a new note using the POST route
app.post("/", async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//reading all notes using the GET route
app.get('/', async (req, res) => {
    try {
        const notes = await UserModel.find();    //find() used to read data from your database UserModel, if you specify id inside of the find method, you can retrieve one single record/note
        res.status(201).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//delete a task
app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await UserModel.findByIdAndDelete(id)
        res.status(204).end();
        //res.status(204).json(res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//get data
app.get('/getData/:id', (req, res) => {
    const {id} = req.params;
    UserModel.findById(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//update a note
app.put('/update-note/:id',  async (req, res) => {
    const {id} = req.params;
    await UserModel.findByIdAndUpdate({_id:id}, {title: req.body.title, content: req.body.content})
    .then(users => res.status(201).json(users))
    .catch(err => res.status(500).json({message: err.message}))
})

mongoose.connect("mongodb://localhost:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3001, () => {
            console.log('Server started on port 3001');
        });
    })
    .catch(error => console.error("Error connecting to MongoDB:", error));
