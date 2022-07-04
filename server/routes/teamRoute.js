const express = require('express');
const teamController = require('../controllers/team.controller');

const teamRouter = express.Router();

teamRouter
  .route('/teams')
  .get(teamController.getAllTeams)
  .post(teamController.addNewTeam)
  .delete(teamController.deleteTeam);

teamRouter.get('/teams/:id', teamController.getOneTeam);
// teamRouter.get('/GetAllTeams', teamController.getAllTeams);

module.exports = teamRouter;
