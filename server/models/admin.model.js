const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your emailID"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    team: {
        type: String,
        required: [true, "please enter your team name"],
    }
});

module.exports = mongoose.model("Admin", AdminSchema);
