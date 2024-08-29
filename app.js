import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import './mongo.js'
import './mongo_player.js'
import User from './mongo.js';
import Player from './mongo_player.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define your routes here

// Example route
app.get("/", (req, res) => {
    res.send("Hello from Express");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/",cors(),(req,res) => {
    res.send("Hello");
})

app.post("/login", (req, res) => {
    // console.log("logging in")
    const {email, password} = req.body
    User.findOne({email:email})
    .then(user => {
        if(user) {
            if (user.password === password)
                res.json("Success")
            else {
                res.json("Incorrect Password")
            }
        }
        else {
            res.json("No account!")
        }
    })
   
})

app.post("/user", (req,res) => {
    User.create(req.body)
    .then(e => res.json(e))
    .catch(err => res.json(err))
    console.log("1 more account added")
})


app.post("/player", (req,res) => {
    Player.create(req.body)
    .then(e => res.json(e))
    .catch(err => res.json(err))
    console.log("added a player")
})

app.get("/player", (req, res) => {
    // console.log("fetched players")
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.status(400).json({ error: err.message }));
});

