const express = require("express");
const teamController = require('../controllers/team.controller')


const teamRouter = express.Router();

teamRouter.get('/GetAllTeams', teamController.getAllTeams);

module.exports = teamRouter

