import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/Login")
.then(() => {
    console.log("mongodb player connected")
})
.catch(() => {
    console.log("failed")
})
const playerSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    shirtNumber: {
        type: Number,
        required: true
    },
    nation: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    }
})

const Player = mongoose.model("player", playerSchema)

export default Player;