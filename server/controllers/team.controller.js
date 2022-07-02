const { model } = require('mongoose');
const team = require('../models/team.model');

function getAllTeams (req, res) {
    res.send(team)
}

module.exports = {
    getAllTeams
}