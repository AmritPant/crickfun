const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: [true, "Please add the year of the team"]
    },
    email: {
        type: String,
        required: [true, "Please enter the emailID of Team"]
    },
    teamName: {
        type: String,
        required: [true, "Please add the Name of Team"],
    },
    captain: {
        type: String,
        required: [true, "Please add the Captain of Team"],
    },
    viceCaptain: {
        type: String,
        required: [true, "Please add the viceCaptain of Team"],
    },
    players: {
        type: Array,
        required: [true, "Please add the player names of the Team"],
    },
    shareHolder: {
        type: Array,
        required: [true, "Please add the share holders of Team"],
    },
    rank: {
        type: Number,
        required: [true, "Please add the rank of Team"],
    },
    Batsman: {
        type: Array,
        required: [true, "Please add the batsmans of the team"],
    },
    Logo: {
        type: String,
        required: [true, "Please add the logo of the team"],
    },
    Jersey: {
        type: String,
        required: [true, "Please add the jersey of the team"],
    },
    Bowler: {
        type: Array,
        required: [true, "Please add the bowlers of the team"],
    },
    allRounder: {
        type: Array,
        required: [true, "Please add the allRounders of the team"],
    }


});

module.exports = mongoose.model("Team", TeamSchema);
