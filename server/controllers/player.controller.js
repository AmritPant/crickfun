const Player = require("../models/player.model.js");

async function getAllPlayers(req, res) {
  const playersData = await Player.find({});
  res.send(playersData);
}

async function addNewPlayer(req, res) {
  const playerData = await Player.create(req.body.data);
  res.status(201).json(playerData);
}

module.exports = {
  getAllPlayers,
  addNewPlayer,
};
