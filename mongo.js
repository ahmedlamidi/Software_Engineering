import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/Login")
.then(() => {
    console.log("mongodb connected")
})
.catch(() => {
    console.log("failed")
})

const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,   
        required: true
    }
})

const User = mongoose.model("user", newSchema)

export default User;