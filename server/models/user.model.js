const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your emailID"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    name: {
        type: String,
        required: [true, "Please enter your name"],
    }

});

module.exports = mongoose.model("User", UserSchema);
