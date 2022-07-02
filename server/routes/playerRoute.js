const express = require("express");
const playerController = require("../controllers/player.controller");

const playerRouter = express.Router();

playerRouter.get("/GetAllPlayers", playerController.getAllPlayers);
playerRouter.post("/AddNewPlayer", playerController.addNewPlayer);

module.exports = playerRouter;
