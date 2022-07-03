const express = require('express');
const playerController = require('../controllers/player.controller');

const playerRouter = express.Router();

playerRouter
  .route('/players')
  .get(playerController.getAllPlayers)
  .post(playerController.addNewPlayer);

// playerRouter.get("/player", playerController.getAllPlayers);
// playerRouter.post("/AddNewPlayer", playerController.addNewPlayer);

module.exports = playerRouter;
