const express = require('express');
const playerController = require('../controllers/player.controller');

const playerRouter = express.Router();

playerRouter
  .route('/players')
  .get(playerController.getAllPlayers)
  .post(playerController.addNewPlayer);

playerRouter.route('/players/:playerId').get(playerController.getOnePlayer);
playerRouter.get('/search', playerController.searchPlayer);

module.exports = playerRouter;
