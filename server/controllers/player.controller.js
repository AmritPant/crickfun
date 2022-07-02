const { model } = require("mongoose");
const Player = require("../models/player.model.js");

async function getAllPlayers(req, res) {
  res.send(player);
}

async function addNewPlayer(req, res) {
  const playerData = await Player.insertOne(req.body.data);
  res.status(201).json(playerData);
}

module.exports = {
  getAllPlayers,
  addNewPlayer,
};
