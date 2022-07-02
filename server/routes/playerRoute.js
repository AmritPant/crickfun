const express = require("express");
const playerController = require('../controllers/player.controller')


const playerRouter = express.Router();

playerRouter.get('/GetAllPlayers', playerController.getAllPlayers);

module.exports = playerRouter


