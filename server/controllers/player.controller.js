const Player = require('../models/player.model.js');

async function getAllPlayers(req, res) {
  const playersData = await Player.find({});
  res.send(playersData);
}

async function addNewPlayer(req, res) {
  const playerData = await Player.create(req.body.data);
  res.status(201).json(playerData);
}

async function getOnePlayer(req, res) {
  const { playerId } = req.params;
  const curPlayer = await Player.findOne({ _id: playerId });

  if (!curPlayer)
    return res
      .status(400)
      .json({ status: 'failed', message: 'Invalid Player Name' });
  res.status(200).json({ status: 'success', data: curPlayer });
}

async function searchPlayer(req, res) {
  const { player_name } = req.query;

  const playerData = await Player.find({
    name: /player_name/gi,
  });

  if (playerData.length === 0) {
    return res
      .status(200)
      .json({ status: 'failed', message: 'Please Enter Correct Name' });
  }
  res.status(200).json(playerData);
}

module.exports = {
  getAllPlayers,
  addNewPlayer,
  getOnePlayer,
  searchPlayer,
};
