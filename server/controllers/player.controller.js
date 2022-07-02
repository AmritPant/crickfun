const { model } = require('mongoose');
const player = require('../models/player.model');

function getAllPlayers (req, res) {
    res.send(player)
}

module.exports = {
    getAllPlayers
}